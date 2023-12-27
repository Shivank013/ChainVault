import React, { useContext, useState, useEffect } from 'react';
import SidebarInstitute from './SidebarInstitude';
import { AppContext } from '../../context/AppContext';
import { useForm } from 'react-hook-form';
import CryptoJS from 'crypto-js';
import SkeletonLoader from '../Home/SkeletonLoader';
import { BiSolidChevronsDown } from 'react-icons/bi'
import { BiSolidChevronsUp } from 'react-icons/bi'

function GivenCertificates() {
  const [courseNames, setCourseNames] = useState([]);
  const {
    account,
    getCourses,
    setDashboardLoading,
    getEnrolledStudentsInCourse,
    dashboardLoading,
    getStudentInfo,
  } = useContext(AppContext);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [studentInfo, setStudentInfo] = useState([]); 
  const { formState: { errors }, register } = useForm();

  const fetchData = async () => {
    try {
      const response = await getCourses(account);
      console.log(response);
      setCourseNames(response);
      setDashboardLoading(false);
      console.log(courseNames);
    } catch (error) {
      console.error('Error fetching data:', error);
      setDashboardLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCourseChange = (event) => {
    setLoading(true);
    const selectedValue = event.target.value;
    setSelectedCourse(selectedValue);
    handleSelectionChange(selectedValue);
  };

  const initialShowMoreState = data.map(() => false)
  const [showMore, setShowMore] = useState(initialShowMoreState)

  const toggleShowMore = (index) => {
    // Toggle the state for the specific item
    const newShowMore = [...showMore]
    newShowMore[index] = !newShowMore[index]
    setShowMore(newShowMore)
  }

  const handleSelectionChange = async (selectedCourse) => {
    try {
      console.log('Selected course:', selectedCourse);

      const response = await getEnrolledStudentsInCourse(account, selectedCourse);

      setData(response);

      const studentInfoPromises = response.map(async (studentId) => {
        try {
        const info = await getStudentInfo(studentId);

          
        const secretKey = 'secret'
        const decryptedBytes = CryptoJS.AES.decrypt(info[1], secretKey);
        const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));

        console.log(decryptedData)

          return decryptedData;
        } catch (error) {
          console.error('Error fetching student info:', error);
          return null;
        }
      });

      const resolvedStudentInfo = await Promise.all(studentInfoPromises);
      setStudentInfo(resolvedStudentInfo.filter((info) => info !== null));

      console.log(studentInfo);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching enrolled students:', error);
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 flex flex-col">
      <SidebarInstitute />
      <div className="pl-80 pt-7">
        <h2 className="font-inter font-semibold text-6xl m-2">Given Certificates To... </h2>

        <form className=' mt-16 '>
          <div className=' flex items-center'>
            <label className=' font-robo font-semibold text-red-500 ml-4 text-4xl'>Select Course:</label>
            <select
              className=" w-60 ml-2 text-xl font-inter font-medium p-2 border-2 border-slate-300 rounded-md"
              {...register('coursename', {
                required: 'coursename is required',
              })}
              onChange={handleCourseChange}
              value={selectedCourse || 'defaultValue'} 
            >
              <option value="defaultValue" disabled hidden>
                Select a Course
              </option>
              {dashboardLoading ? (
                <option value="">Loading courses...</option>
              ) : (
                courseNames.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))
              )}
            </select>
            {errors._id && <span>{errors._id.message}</span>}
          </div>
        </form>

        <div>
            {loading ? (
              <SkeletonLoader/>
            ) : (
              <div className=" mt-10 w-full">
                {studentInfo.map((item, index) => (
                  <div
                    className="flex transition-transform transform transition-delay-500 hover:translate-x-6 flex-row m-4 items-center"
                    key={item._id}
                  >
                    <img
                      className="h-16 mr-6 shadow-xl rounded-full"
                      src={`https://api.dicebear.com/5.x/initials/svg?seed=${item.name}`}
                      alt={item.email}
                    />
                    <div className=" shadow-inner bg-slate-200 text-richblack-900 font-medium w-[80%] rounded-full px-16 py-4">
                      <p>
                        <span className=" text-red-500 font-semibold">
                          Name:{' '}
                        </span>{' '}
                        {item.name}
                      </p>
                      <p>
                        <span className=" text-red-500 font-semibold">
                          Account Number:
                        </span>{' '}
                        {item.AccountNumber}
                        {/* Render additional content if showMore is true */}
                        {showMore[index] && (
                          <>
                            <p>
                              <span className=" text-red-500 font-semibold">
                                Contact Number:
                              </span>{' '}
                              {item.tel}
                            </p>
                            <p>
                              <span className=" text-red-500 font-semibold">
                                Email:{' '}
                              </span>{' '}
                              {item.email}
                            </p>
                          </>
                        )}
                        {/* Toggle button based on showMore state */}
                      </p>
                      <button
                        className=" bg-blue-500 px-2 py-1 text-white text-sm mt-1 rounded-xl font-semibold flex flex-row justify-center items-center"
                        onClick={() => toggleShowMore(index)}
                      >
                        {showMore[index] ? (
                          <>
                            Show Less <BiSolidChevronsUp />
                          </>
                        ) : (
                          <>
                            Show More <BiSolidChevronsDown />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
      </div>
    </div>
  );
}

export default GivenCertificates;
