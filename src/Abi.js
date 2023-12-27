export const abi =  [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_governmentAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_instituteAddress",
        "type": "address"
      },
      {
        "internalType": "string[]",
        "name": "_courseNames",
        "type": "string[]"
      }
    ],
    "name": "addCourses",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_instituteAddress",
        "type": "address"
      }
    ],
    "name": "approveInstitute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_studentAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_instituteAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_courseName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_transactionHash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_ipfsHash",
        "type": "string"
      }
    ],
    "name": "createCertificate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_instituteAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_courseName",
        "type": "string"
      }
    ],
    "name": "getAllCertificatesInCourse",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_transactionHash",
        "type": "string"
      }
    ],
    "name": "getCertificateOwners",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_instituteAddress",
        "type": "address"
      }
    ],
    "name": "getCourses",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_instituteAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_courseName",
        "type": "string"
      }
    ],
    "name": "getEnrolledStudentsInCourse",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_instituteAddress",
        "type": "address"
      }
    ],
    "name": "getInstituteInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "instituteAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "instituteData",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "course",
        "type": "string[]"
      },
      {
        "internalType": "address[]",
        "name": "enrolledStudents",
        "type": "address[]"
      },
      {
        "internalType": "bool",
        "name": "isApprovedByInstitute",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isApprovedByGovernment",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_studentAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_transactionHash",
        "type": "string"
      }
    ],
    "name": "getIpfsHash",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_studentAddress",
        "type": "address"
      }
    ],
    "name": "getStudentInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "studentAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "studentData",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "transactionHash",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "governmentAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "institutes",
    "outputs": [
      {
        "internalType": "address",
        "name": "instituteAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "instituteData",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isApprovedByInstitute",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isApprovedByGovernment",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_instituteAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_instituteData",
        "type": "string"
      }
    ],
    "name": "registerInstitute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_studentAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_studentData",
        "type": "string"
      }
    ],
    "name": "registerStudent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_instituteAddress",
        "type": "address"
      }
    ],
    "name": "rejectInstitute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "students",
    "outputs": [
      {
        "internalType": "address",
        "name": "studentAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "studentData",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_transactionHash",
        "type": "string"
      }
    ],
    "name": "verification",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];