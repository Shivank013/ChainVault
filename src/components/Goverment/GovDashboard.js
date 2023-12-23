import { BsKey } from 'react-icons/bs'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { TbWorldSearch } from 'react-icons/tb'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { TiFolderOpen } from 'react-icons/ti'
import { AppContext } from '../../context/AppContext'

import user from '../../assets/Images/user.png'

import logout from '../../assets/Images/sent.svg'
import './gov.css'

import Slidebar from './Slidebar'

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Image,
  Box,
  Flex,
} from '@chakra-ui/react'
import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'
import GovHome from './components/govhome/GovHome'

const GovDashboard = () => {
  const { result } = useContext(AppContext)
  console.log(result)

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

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box>
        <div className="    pt-16   flex flex-col">
          <Slidebar />
          <div className="  pl-80 pt-7">
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

export default GovDashboard
