import user from '../../../assets/Images/user.png'

import logout from '../../../assets/Images/log-out.png'
import '../gov.css'
import Slidebar from '../Slidebar.js'
import { useDisclosure, Box } from '@chakra-ui/react'
import React, { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext.js'

const Topicon = () => {
  const { result, setResult } = useContext(AppContext)

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
  const navigate = useNavigate()

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

  return (
    <>
      <Box className=' z-50'>
        <div className="menu-container" ref={menuRef}>
          <div
            className="menu-trigger w-9 "
            onClick={() => {
              setOpen(!open)
            }}
          >
            <img
              className="bg-cover"
              src="https://cdn.iconscout.com/icon/free/png-512/free-user-avatar-contact-portfolio-personal-portrait-profile-5093.png?f=webp&w=256"
            ></img>
          </div>

          <div
            className={`dropdown-menu ${open ? 'active  bord' : 'inactive'}`}
          >
            <ul>
              <DropdownItem img={user} text={'Dashboard'} />

              <button onClick={bahar}>
                <DropdownItem img={logout} text={'Logout'} />
              </button>
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

export default Topicon
