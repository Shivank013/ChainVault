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
    reset,
  } = useForm() // Use 'register' method

  const [data, setData] = useState([])
  const [cource, setCourse] = useState([])
  const [selectedInstitute, setSelectedInstitute] = useState('')

  useEffect(() => {
    fetchData2()
  }, [selectedInstitute])

  const fetchData2 = async () => {
    if (selectedInstitute) {
      try {
        setCourse([])
        console.log('Fetching courses for institute:', selectedInstitute)

        const inst = data.find((item) => item._id === selectedInstitute)
        console.log(inst.AccountNumber)

        const response = await getCourses(inst.AccountNumber)
        setCourse(response)
        setDashboardLoading(false)
      } catch (error) {
        console.error('Error fetching courses:', error)
        setDashboardLoading(false)
      }
    }
  }

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
    reset();
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
    <div className="   pt-16   flex flex-col">
      <SidebarStudent />
      <div className="      pl-80 pt-7">
      <h2 class="font-inter font-semibold text-6xl m-2">Application Form...</h2>
        <div class="flex flex-col pb-20 w-full items-center dark">
          <div class="bg-gray-800 w-[40%] shadow-2xl mt-20 rounded-lg p-6">

            <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col">
              <div className=" w-full">
                <input
                  placeholder="Full Name"
                  type="text"
                  class="bg-gray-700 text-gray-200 border-0 w-[100%] rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  {...register('StudentName', {
                    required: 'Student Name is required',
                  })}
                />
                {errors.StudentName && (
                  <span>{errors.StudentName.message}</span>
                )}
              </div>

              <div className="w-full">
                <select
                  class="bg-gray-700 text-gray-200 h-10 border-0 w-[100%] rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  {...register('instituteName', {
                    required: 'Institute ID is required',
                  })}
                  onChange={(e) => setSelectedInstitute(e.target.value)}
                  value={selectedInstitute || 'defaultValue'} // Set the default value here
                >
                  <option
                    className="text-gray-700  "
                    value="defaultValue"
                    disabled
                    hidden
                  >
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

              <div className="  w-full ">
                {cource.length > 0 ? (
                  <select
                    class="bg-gray-700 h-10 text-gray-200 border-0 w-[100%] rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
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
                  <div class="bg-gray-700 h-10 w-[100%] text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150">
                    No courses available
                  </div>
                )}
                {errors.courseName && <span>{errors.courseName.message}</span>}
              </div>

              <div className=" w-full">
              <label className="text-gray-200">Start Date</label>
                <input
                  placeholder="Start date"
                  class="bg-gray-700 text-gray-200 border-0 w-[100%] rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="date"
                  {...register('StartDate', {
                    required: 'Start Date is required',
                  })}
                />
                {errors.StartDate && <span>{errors.StartDate.message}</span>}
              </div>

              <div className="w-full">
              <label className="text-gray-200">End Date</label>
                <input
                  placeholder="End date"
                  class="bg-gray-700 text-gray-200 border-0 w-[100%] rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="date"
                  {...register('EndDate', { required: 'End Date is required' })}
                />
                {errors.EndDate && <span>{errors.EndDate.message}</span>}
              </div>

              <button
                class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                type="submit"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Application