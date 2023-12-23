// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocVerification {
    address public governmentAddress;

    constructor(address _governmentAddress) {
        require(_governmentAddress != address(0), "Government address cannot be zero");
        governmentAddress = _governmentAddress;
    }

    modifier onlyGovernment() {
        require(msg.sender == governmentAddress, "Only government can call this function");
        _;
    }
  
    struct Student {
        address studentAddress;
        string studentData;
        string[] transactionHash; 
        mapping (string => string) ipfsHash;
    }

    mapping(address => Student) public students;

    struct Certificate {
        address studentAddress;
        address instituteAddress;
        string transactionHash;
    }

    mapping (string => Certificate) certificates; 

    struct Institute {
        address instituteAddress;
        string instituteData;
        string[] course; 
        address[] enrolledStudents;
        mapping(string => address[]) studentsByCourse; 
        mapping(string => string[]) allCertificateInCourse; 
        bool isApprovedByInstitute;
        bool isApprovedByGovernment;
    }

    mapping (address => Institute) public institutes;

    function registerInstitute(address _instituteAddress, string memory _instituteData) public {
        require(_instituteAddress != address(0), "Institute address cannot be zero");
        require(institutes[_instituteAddress].instituteAddress == address(0), "Institute already registered");
        require(msg.sender == _instituteAddress, "Only the institure can register itself");
        
        Institute storage newInstitute = institutes[_instituteAddress];
        newInstitute.instituteAddress = _instituteAddress;
        newInstitute.instituteData = _instituteData;
        newInstitute.course = new string[](0);
        newInstitute.enrolledStudents = new address[](0);
        newInstitute.isApprovedByInstitute = true;
        newInstitute.isApprovedByGovernment = false;
    }


    function registerStudent(address _studentAddress, string memory _studentData) public {
        require(_studentAddress != address(0), "Student address cannot be zero");
        require(students[_studentAddress].studentAddress == address(0), "Student already registered");
        require(msg.sender == _studentAddress, "Only the student can register itself");
        
        Student storage newStudent = students[_studentAddress];
        newStudent.studentAddress = _studentAddress;
        newStudent.studentData = _studentData;
        newStudent.transactionHash = new string[](0);
    }

    function approveInstitute(address _instituteAddress) public {
        require(_instituteAddress != address(0), "Institute address cannot be zero");
        require(msg.sender == _instituteAddress || msg.sender == governmentAddress, "Only institute or government can approve");

        Institute storage institute = institutes[_instituteAddress];
        require(institute.instituteAddress != address(0), "Institute does not exist"); // Check if the institute exists

        if (msg.sender == _instituteAddress) {
            require(!institute.isApprovedByInstitute, "Institute already approved by itself");
            institute.isApprovedByInstitute = true;
        } else if (msg.sender == governmentAddress) {
            require(!institute.isApprovedByGovernment, "Institute already approved by government");
            institute.isApprovedByGovernment = true;
        }
    }

    function addCourses(address _instituteAddress, string[] memory _courseNames) public {
        require(msg.sender == _instituteAddress, "Only the institute can add courses to itself");

        Institute storage institute = institutes[_instituteAddress];
        require(institute.instituteAddress != address(0), "Institute does not exist");
        require(institute.isApprovedByInstitute && institute.isApprovedByGovernment, "Institute is not approved");

        for (uint256 i = 0; i < _courseNames.length; i++) {
            string memory courseName = _courseNames[i];
            for (uint256 j = 0; j < institute.course.length; j++) {
                require(keccak256(bytes(institute.course[j])) != keccak256(bytes(courseName)), "Course already exists");
            }
            institute.course.push(courseName);
        }
    }

    function rejectInstitute(address _instituteAddress) public onlyGovernment {
        require(_instituteAddress != address(0), "Institute address cannot be zero");
        Institute storage institute = institutes[_instituteAddress];
        require(institute.instituteAddress != address(0), "Institute does not exist"); // Check if the institute exists
        delete institutes[_instituteAddress];
    }
    
    function getInstituteInfo(address _instituteAddress) 
            public view 
            returns (
                address instituteAddress, 
                string memory instituteData,
                string[] memory course,
                address[] memory enrolledStudents,
                bool isApprovedByInstitute,
                bool isApprovedByGovernment
            ) 
        {
            Institute storage institute = institutes[_instituteAddress];
            require(institute.instituteAddress != address(0), "Institute does not exist");
            return (
                institute.instituteAddress,
                institute.instituteData,
                institute.course,
                institute.enrolledStudents,
                institute.isApprovedByInstitute,
                institute.isApprovedByGovernment
            );
        }

    function getStudentInfo(address _studentAddress) 
            public view 
            returns (
                address studentAddress,
                string memory studentData,
                string[] memory transactionHash
            ) 
        {
            Student storage student = students[_studentAddress];
            require(student.studentAddress != address(0), "Student does not exist");
            return (
              student.studentAddress,
              student.studentData,
              student.transactionHash
            );
        } 

    function getIpfsHash(address _studentAddress,string memory _transactionHash) public view returns(string memory) {
            Student storage student = students[_studentAddress];
            require(student.studentAddress != address(0), "Student does not exist");
            require(bytes(certificates[_transactionHash].transactionHash).length != 0, "This certficate does not exist");
            return student.ipfsHash[_transactionHash];
    }       

    function getEnrolledStudentsInCourse(address _instituteAddress, string memory _courseName) public view returns (address[] memory) {
            Institute storage institute = institutes[_instituteAddress];
            require(institute.instituteAddress != address(0), "Institute does not exist");
            return institute.studentsByCourse[_courseName];
        } 

    function getAllCertificatesInCourse(address _instituteAddress, string memory _courseName) public view returns (string[] memory) {
            Institute storage institute = institutes[_instituteAddress];
            require(institute.instituteAddress != address(0), "Institute does not exist");
            return institute.allCertificateInCourse[_courseName];
        }     

    function getCourses(address _instituteAddress) public view returns(string[] memory) {
            Institute storage institute = institutes[_instituteAddress];
            require(institute.instituteAddress != address(0), "Institute does not exist");
            return institute.course;
        }  

    function getCertificateOwners(string memory _transactionHash) public view returns(address,address) {
            require(bytes(certificates[_transactionHash].transactionHash).length != 0, "This certficate does not exist");
            Certificate storage certificate = certificates[_transactionHash];
            return (certificate.studentAddress,certificate.instituteAddress);
        }

    function verification (string memory _transactionHash) public view returns(bool){
        if(bytes(certificates[_transactionHash].transactionHash).length != 0)
        return true;
        else
        return false;
        }        

    function createCertificate(address _studentAddress,address _instituteAddress,string memory _courseName,string memory _transactionHash, string memory _ipfsHash) public {
        require(bytes(certificates[_transactionHash].transactionHash).length == 0, "Certificate with the same transaction hash already exists");
        Institute storage institute = institutes[_instituteAddress];
        require(institute.isApprovedByInstitute && institute.isApprovedByGovernment, "Institute is not approved");
        Student storage student = students[_studentAddress];
        require(student.studentAddress != address(0), "Student does not exist");
        require(msg.sender == _instituteAddress, "Only institute can creaet certficate");

        // Check if the course exists in the institute
        bool courseExists = false;
        for (uint256 i = 0; i < institute.course.length; i++) {
            if (keccak256(bytes(institute.course[i])) == keccak256(bytes(_courseName))) {
                courseExists = true;
                break;
            }
        }
        require(courseExists, "Course does not exist in the institute");

        institute.studentsByCourse[_courseName].push(_studentAddress);

        institute.enrolledStudents.push(_studentAddress);
        
        certificates[_transactionHash] = Certificate(_studentAddress,_instituteAddress,_transactionHash);

        institute.allCertificateInCourse[_courseName].push(_transactionHash);

        student.transactionHash.push(_transactionHash);

        student.ipfsHash[_transactionHash] = _ipfsHash;
    }
}