import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import user from '../../assets/Images/user.png'
import logout from '../../assets/Images/sent.svg'
import './gov.css'
import Slidebar from './Slidebar'
import {useDisclosure,Box,} from '@chakra-ui/react'
import React, { useState, useEffect, useRef, useContext } from 'react'
import GovHome from './components/govhome/GovHome'

const GovDashboard = () => {
  const { result,setResult } = useContext(AppContext)
  console.log(result)
  const navigate = useNavigate()
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
    }
  })

  function bahar() {
    setResult({
      isLoading: true,
      isAuthorized: false,
      username: '',
      email: '',
      id: '',
    })
    navigate('/')
  }

  function goto() {
    if (result.username === 'goverment') {
      navigate('/dashboard/goverment');
      return null;
  } else if (result.username === 'institute') {
      navigate('/dashboard/institute');
      return null;
  } else {
      navigate('/dashboard/student');
      return null;
  }
    
  }

  return (
    <>
      <Box>
        <div className="    pt-16   flex flex-col">
          <Slidebar />
          <div className="  overflow-y-hidden pl-80 pt-7">
            <div>
              <GovHome />
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
              <DropdownItem onClick={bahar} img={user} text={'Dashboard'} />

              <DropdownItem onClick={goto} img={logout} text={'Logout'} />
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

export default GovDashboard
