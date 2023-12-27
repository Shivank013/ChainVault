import React from 'react'
import Slidebar from './Slidebar'
import GovHome from './components/govhome/GovHome'

function GovProfile() {
  return (
    <div className="  overflow-y-hidden   pt-16   flex flex-col">
      <Slidebar  />
      <div className=" pl-[18.7rem]">
        <GovHome />
      </div>
    </div>
  )
}

export default GovProfile
