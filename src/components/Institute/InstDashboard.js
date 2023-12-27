import { AppContext } from '../../context/AppContext'
import user from '../../assets/Images/user.png'
import logout from '../../assets/Images/sent.svg'
import '../Goverment/gov.css'
import SidebarInstitute from './SidebarInstitude'
import {Box} from '@chakra-ui/react'
import React, { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const InstDashboard = () => {
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
      navigate('/dashboard/institute/institute-profile');
    }
  })

  return (
    <>
      <Box>
        <div className="   pt-16   flex flex-col">
          <SidebarInstitute />
          <div className="      pl-80 pt-7">
            <div>
              oekfpksappslapcflspdcpkskdlcldsllclcdsjfkdskjvdmvlmdlmvkfdomvmdfkvdf{' '}
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
              src={`https://api.dicebear.com/5.x/initials/svg?seed=${result.email}`}
            ></img>
          </div>

          <div
            className={`dropdown-menu ${open ? 'active  bord' : 'inactive'}`}
          >
            
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

export default InstDashboard
