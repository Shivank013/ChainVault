import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { getRegisteredInst } from '../../services/operations/GovermentOperations'
import Slidebar from './Slidebar'
import { BiSolidChevronsDown } from 'react-icons/bi'
import { BiSolidChevronsUp } from 'react-icons/bi'
import SkeletonLoader from '../Home/SkeletonLoader'

function RegisteredInstitute() {
  const { result} =
    useContext(AppContext)
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState();

  const fetchData = async () => {
    try {
      setLoader(true);
      console.log(result.id)
      const response = await getRegisteredInst(result.id)
      console.log(response)
      setData(response.data)
      setLoader(false);
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [result.id])

  // Initialize showMore state for each item
  const initialShowMoreState = data.map(() => false)
  const [showMore, setShowMore] = useState(initialShowMoreState)

  const toggleShowMore = (index) => {
    // Toggle the state for the specific item
    const newShowMore = [...showMore]
    newShowMore[index] = !newShowMore[index]
    setShowMore(newShowMore)
  }

  return (
    <div className="pt-16 flex flex-col">
      <Slidebar />
      <div className="pl-80 pt-7">
        <div>
          <h2 className="font-inter font-semibold text-6xl m-2">Registered Institute...</h2>
          <div>
            {loader ? (
              <SkeletonLoader/>
            ) : (
              <div className=" mt-10 mx-1 my-10 w-full">
                {data.map((item, index) => (
                  <div
                    className="flex transition-transform transform transition-delay-500 hover:translate-x-6 flex-row m-4 items-center"
                    key={item._id}
                  >
                    <img
                      className="h-16 mr-6 shadow-xl rounded-full"
                      src={item.image}
                      alt={item.email}
                    />
                    <div className=" shadow-xl bg-slate-200 text-richblack-900 mb-2 font-medium w-[80%] rounded-full px-16 py-4">
                      <p>
                        <span className=" text-red-500 font-semibold">
                          Name:{' '}
                        </span>{' '}
                        {item.instituteName}
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
                              {item.contactNumber}
                            </p>
                            <p>
                              <span className=" text-red-500 font-semibold">
                                Email:{' '}
                              </span>{' '}
                              {item.email}
                            </p>
                            <p>
                              <span className=" text-red-500 font-semibold">
                                Status:
                              </span>{' '}
                              {item.Approved}
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
    </div>
  )
}

export default RegisteredInstitute
