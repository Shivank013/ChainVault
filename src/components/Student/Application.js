import React, { useEffect, useState } from 'react'
import { cerificateApplication } from '../../services/operations/StudentOperations'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { RegisteredInst } from '../../services/operations/InstituteOperations'
import SidebarStudent from './SidebarStudent'

function Application() {
  const { result, dashboardLoading, setDashboardLoading, getCourses } =
    useContext(AppContext)
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm() // Use 'register' method

  const [data, setData] = useState([])
  const [cource, setCourse] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState('');

  useEffect(() => {
    fetchData2();
  }, [selectedInstitute]);

  const fetchData2 = async () => {
    if (selectedInstitute) {
      try {
        setCourse([]);
        console.log("Fetching courses for institute:", selectedInstitute);

        const inst = data.find(item => item._id === selectedInstitute);
        console.log(inst.AccountNumber);

        const response = await getCourses(inst.AccountNumber);
        setCourse(response);
        setDashboardLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setDashboardLoading(false);
      }
    }
  };

  const onSubmit = async (data) => {
    try {
      data.InstituteId = data.instituteName
      console.log(data)
      console.log(result.id)
      const res = await cerificateApplication(result.id, data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchData = async () => {
    try {
      console.log(result.id)
      const response = await RegisteredInst()
      console.log(response)
      setData(response.data)
      setDashboardLoading(false)
      console.log(result.id)
    } catch (error) {
      console.error('Error fetching data:', error)
      setDashboardLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="    pt-16   flex flex-col">
      <SidebarStudent />
      <div className="      pl-80 pt-7">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Student Name:</label>
            <input
              {...register('StudentName', {
                required: 'Student Name is required',
              })}
            />
            {errors.StudentName && <span>{errors.StudentName.message}</span>}
          </div>

          <div>
          <label>Institute Name:</label>
          <select
            className="w-32"
            {...register('instituteName', {
              required: 'Institute ID is required',
            })}
            onChange={(e) => setSelectedInstitute(e.target.value)}
            value={selectedInstitute || 'defaultValue'} // Set the default value here
          >
            <option value="defaultValue" disabled hidden>
              Select an Institute
            </option>
            {dashboardLoading ? (
              <option value="">Loading Institutes...</option>
            ) : (
              data.map((institute) => (
                <option key={institute._id} value={institute._id}>
                  {institute.instituteName}
                </option>
              ))
            )}
          </select>
          {errors._id && <span>{errors._id.message}</span>}
        </div>

        <div>
        <label>Course Name:</label>
        {cource.length > 0 ? (
          <select
            className="w-32"
            {...register('courseName', {
              required: 'Course Name is required',
            })}
          >
            <option value="" disabled selected>
              Select a course
            </option>
            {cource.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        ) : (
          <span>No courses available</span>
        )}
        {errors.courseName && <span>{errors.courseName.message}</span>}
      </div>



          <div>
            <label>Start Date:</label>
            <input
              type="date"
              {...register('StartDate', { required: 'Start Date is required' })}
            />
            {errors.StartDate && <span>{errors.StartDate.message}</span>}
          </div>

          <div>
            <label>End Date:</label>
            <input
              type="date"
              {...register('EndDate', { required: 'End Date is required' })}
            />
            {errors.EndDate && <span>{errors.EndDate.message}</span>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Application
