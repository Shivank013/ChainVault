import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {getNonRegisteredInst,approveInst} from '../../services/operations/GovermentOperations'
import Slidebar from './Slidebar'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BiSolidChevronsDown } from 'react-icons/bi'
import { BiSolidChevronsUp } from 'react-icons/bi'
import SkeletonLoader from '../Home/SkeletonLoader'
import './Loading.css'
import './Card1.css'

function InsttituteApplications() {
  const [data, setData] = useState([])
  const [sliderKey, setSliderKey] = useState(0)
  const initialShowMoreState = data.map(() => false)
  const [showMore, setShowMore] = useState(initialShowMoreState)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  const { result,approveInstitute } =
    useContext(AppContext)
  const [loader , setLoader] = useState();  

  const toggleShowMore = (index) => {
    // Toggle the state for the specific item
    const newShowMore = [...showMore]
    newShowMore[index] = !newShowMore[index]
    setShowMore(newShowMore)
  }

  const fetchData = async () => {
    try {
      setLoader(true);
      console.log(result.id)
      const response = await getNonRegisteredInst(result.id)
      console.log(response)
      setData(response.data)
      setLoader(false);
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [result.id, sliderKey])

  const handleApprove = async (id, AccountNumber) => {
    try {
      setLoader(true);
      console.log(id, AccountNumber)
      await approveInst(result.id, id)
      console.log('ac')
      console.log(AccountNumber)
      await approveInstitute(AccountNumber)
      fetchData() // Fetch data again after approval
      setSliderKey((prevKey) => prevKey + 1)
      setLoader(false);
    } catch (error) {
      console.error('Error approving institute:', error)
    }
  }

  return (
    <div className="  pt-16  flex flex-col">
      <Slidebar />
      <div className="   pl-80 pt-7 ">
        <div>
            <h2 className="font-inter font-semibold text-6xl m-2">
              Applications for Registration...
            </h2>
            {loader ? (
              <SkeletonLoader/>
            ) : (
              <div className="mt-10 my-10 mx-3 w-full">
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
                    <div className=" shadow-xl bg-slate-200 mb-2 text-richblack-900 font-medium w-[80%] rounded-full px-16 py-4">
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
                      <div className="  flex   gap-3  flex-row">
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

                        {item.Approved === 'NotApproved' && (
                          <button
                            className="bg-blue-500 px-2 py-1 text-white text-sm mt-1 rounded-xl font-semibold flex flex-row justify-center items-center"
                            onClick={() =>
                              handleApprove(item._id, item.AccountNumber)
                            }
                          >
                            Approve
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default InsttituteApplications
