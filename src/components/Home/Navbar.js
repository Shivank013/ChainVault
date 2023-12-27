import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import logo from "../../assets/Images/ChainVault-removebg-preview.png"
import { AppContext } from "../../context/AppContext";
import Topicon from "../Goverment/components/Topicon";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;
  const {result}=useContext(AppContext);
  
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "login",
      route: "/login",
    },
    {
      name: "Signup",
      route: "/signup",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Contact",
      route: "contact",
    },
  ];

  console.log(result);
  function toggleTheme() {
    if (darkMode === true) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <>
      <nav
        className={
          darkMode
            ? "bg-white border-gray-200 shadow-lg md:px-8 px-1 z-50  w-full  fixed    top-0 left-0"
            : "bg-gray-700 border-gray-200  shadow-lg md:px-8 px-1 z-50 fixed top-0 left-0 w-full "
        }
      >
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto   mr-8">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={
                darkMode
                  ? "text-xl font-medium text-decoration-none whitespace-nowrap text-black"
                  : "text-xl font-medium text-decoration-none whitespace-nowrap text-white"
              }
            >
              <img src={logo} className="w-[12rem] " alt=""></img>
            </a>
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto ">
            <ul
              class={
                "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"
              }
            >
            
                <li className="cursor-pointer  flex flex-row gap-7">
                <Link
                    to="/"
                    activeClass={"text-white bg-blue-500"}
                    spy={true}
                    smooth={true}
                    className={
                      darkMode
                        ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                        : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                  >
                    Home
                  </Link>

                  {
                    result.isAuthorized ? (
                      <Link
                    to="/verification"
                    activeClass={"text-white bg-blue-500"}
                    spy={true}
                    smooth={true}
                    className={
                      darkMode
                        ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                        : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                  >
                    Verification
                  </Link>
                    ) : (null) 
                  }
                  
                  {
                    result.username ? (<div><Topicon/>  </div>) :( <div>
                      <li className="cursor-pointer  flex flex-row gap-7">
                      <Link
                       to="/login"
                       activeClass={"text-white bg-blue-500"}
                       spy={true}
                       smooth={true}
                       className={
                         darkMode
                           ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                           : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                       }
                     >
                       login
                     </Link>
                   
                      <Menu >
                    <MenuButton
                      className="bottom-[4x] text-white bg-blue-500 "
                      as={Button}
                      background={"blue.500"}
                     
                     
                      color={"black"}
                    >
                      <Link  to="/signup"
                       activeClass={"text-white bg-blue-500"}
                       spy={true}
                       smooth={true}
                       className={
                         darkMode
                           ? "block py-2 px-3 text-black hover:text-black rounded-md"
                           : "block py-2 px-3 text-black hover:text-black rounded-md"
                       }>
                        <button onClick={onOpen}>Signup</button>
                      </Link>
                    </MenuButton>
                    <MenuList background={'white'}>
                      <MenuItem
                        className="text-black hover:bg-blue-500"
                        background={'white'}
                      >
                        {' '}
                        <Link to={'/signup/goverment'}>Goverment</Link>
                      </MenuItem>
                      <MenuItem
                        className="text-black hover:bg-blue-500"
                        background={'white'}
                      >
                        <Link to={'/signup/institute'}>Institute</Link>
                      </MenuItem>
                      <MenuItem
                        className="text-black hover:bg-blue-500"
                        background={'white'}
                      >
                        <Link to={'/signup/student'}>Student</Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
  
                      </li>
                      
                      </div>)
                  }
                 
                </li>
            
            </ul>
            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              )}
            </div>
          </div>

          <div className="flex md:hidden items-center">
            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  alt=""
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                />
              )}
            </div>

            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={darkMode ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={
              darkMode
                ? "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
                : "bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
            }
          >
            <ul class="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <Link
                  to={el.route}
                  activeClass={"text-white bg-blue-500"}
                  className={
                    darkMode
                      ? "hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                      : "hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  }
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)}
                >
                  <li>{el.name}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


