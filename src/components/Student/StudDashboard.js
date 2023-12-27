import { AppContext } from '../../context/AppContext'
import user from '../../assets/Images/user.png'
import logout from '../../assets/Images/sent.svg'
import '../Goverment/gov.css'
import {Box} from '@chakra-ui/react'
import React, { useState, useEffect, useRef, useContext } from 'react'
import SidebarStudent from './SidebarStudent'
import { useNavigate } from 'react-router-dom'

const StudDashboard = () => {
  const { result } = useContext(AppContext)
  console.log(result)
  const navigate = useNavigate();

  const [open, setOpen] = useState(false)
  let menuRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false)
        console.log(menuRef.current)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
       navigate('/dashboard/student/student-profile');
    }
  })

  return (
    <>
      <Box>
        <div className="    pt-16  flex flex-col">
          <SidebarStudent />
          <div className="      pl-80 pt-7">
            <div>
              
            </div>
          </div>
        </div>

        <div className="menu-container" ref={menuRef}>
          <div
            className="menu-trigger w-9 "
            onClick={() => {
              setOpen(!open)
            }}
          >
            <img
              className="bg-cover"
              src={`https://api.dicebear.com/5.x/initials/svg?seed=${result.name}`}
            ></img>
          </div>

          <div
            className={`dropdown-menu ${open ? 'active  bord' : 'inactive'}`}
          >
            <h3>
              Deep sen
              <br />
              <span>SARKARI SLAVE</span>
            </h3>
            <ul>
              <DropdownItem img={user} text={'Dashboard'} />

              <DropdownItem img={logout} text={'Logout'} />
            </ul>
          </div>
        </div>
      </Box>
    </>
  )
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  )
}

export default StudDashboard
