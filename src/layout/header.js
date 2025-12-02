import { useState } from "react";

/* REACT IMPORTS */
import { Link, useLocation } from "react-router-dom";

/* MATERIAL TAILWIND COMPONENTS */
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Collapse,
} from "@material-tailwind/react";

/* REACT ICONS */
import { FaChevronRight } from "react-icons/fa6";
import { HiBars2 } from "react-icons/hi2";
import { IoChevronForwardOutline, IoChevronDownOutline } from "react-icons/io5";

/* IMAGES */
import Logo from "assets/images/logo.png";

const Header = () => {
  const location = useLocation();

  /* COLLAPSE STATES */
  const [showMenu, setShowMenu] = useState(false);
  const [orthoMenu, setOrthoMenu] = useState(false);
  const [eyeMenu, setEyeMenu] = useState(false);
  const [jointReplacement, setJointReplacement] = useState(false);
  const [sportsInjury, setSportsInjury] = useState(false);

  return (
    <header className="relative z-50 bg-white py-2 header-shadow">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="text-xl font-inter-extrabold text-black uppercase"
          >
            <img
              src={Logo}
              className="w-auto h-20 object-contain"
              alt="Shreem Hospital"
            />
          </Link>

          {/* NAVIGATION LINKS AND BUTTON */}
          <div className="hidden xl:flex lg:flex items-center gap-12">
            <Link
              to="/"
              className={`block relative text-base font-source-medium ${
                location.pathname === "/" ? "text-orange-400" : "text-black"
              } hover:text-orange-400 transition-all duration-300 ease-in-out`}
            >
              Home
              {location.pathname === "/" && (
                <div className="absolute -bottom-1 left-0 w-full">
                  <div className="w-full h-[0.3vh] bg-orange-400 rounded-full" />
                </div>
              )}
            </Link>

            <Link
              to="/about-us"
              className={`block relative text-base font-source-medium ${
                location.pathname === "/about-us"
                  ? "text-orange-400"
                  : "text-black"
              } hover:text-orange-400 transition-all duration-300 ease-in-out`}
            >
              About us
              {location.pathname === "/about-us" && (
                <div className="absolute -bottom-1 left-0 w-full">
                  <div className="w-full h-[0.3vh] bg-orange-400 rounded-full" />
                </div>
              )}
            </Link>

            <Link
              to="/pixee-medical-system"
              className={`block relative text-base font-source-medium ${
                location.pathname === "/pixee-medical-system"
                  ? "text-orange-400"
                  : "text-black"
              } hover:text-orange-400 transition-all duration-300 ease-in-out`}
            >
              Pixee Knee+ Medical System
              {location.pathname === "/pixee-medical-system" && (
                <div className="absolute -bottom-1 left-0 w-full">
                  <div className="w-full h-[0.3vh] bg-orange-400 rounded-full" />
                </div>
              )}
            </Link>

            <Menu
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              allowHover
            >
              <MenuHandler>
                <p className="block cursor-pointer relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out">
                  Orthopaedic Expertise
                </p>
              </MenuHandler>
              <MenuList className="w-[30vh] p-2 shadow-md">
                <MenuItem className="group py-3 px-4 bg-transparent hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                  <Menu
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                    allowHover
                    placement="right-start"
                    offset={20}
                  >
                    <MenuHandler>
                      <div className="group flex items-center justify-between">
                        <p className="text-base font-source-regular text-black group-hover:text-orange-400 transition-all duration-300 ease-in-out cursor-pointer">
                          Joint Replacement
                        </p>
                        <FaChevronRight className="w-2.5 h-2.5 text-black group-hover:text-orange-400" />
                      </div>
                    </MenuHandler>
                    <MenuList className="w-[25vh] p-2 shadow-md">
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          to="/knee-joint-replacement"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Knee & Joint Replacement
                        </Link>
                      </MenuItem>
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          to="/hip-joint-replacement"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Hip & Joint Replacement
                        </Link>
                      </MenuItem>
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          to="/shoulder-joint-replacement"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Shoulder Joint Replacement
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </MenuItem>
                <MenuItem className="group py-3 px-4 bg-transparent hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                  <Link
                    to="/ortho-biologic-treatments"
                    className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                  >
                    Ortho Biologic Treatments
                  </Link>
                </MenuItem>
                <MenuItem className="group py-3 px-4 bg-transparent hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                  <Menu
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                    allowHover
                    placement="right-start"
                    offset={20}
                  >
                    <MenuHandler>
                      <div className="group flex items-center justify-between">
                        <p className="text-base font-source-regular text-black group-hover:text-orange-400 transition-all duration-300 ease-in-out cursor-pointer">
                          Arthroscopy & Sports Injury
                        </p>
                        <FaChevronRight className="w-2.5 h-2.5 text-black group-hover:text-orange-400" />
                      </div>
                    </MenuHandler>
                    <MenuList className="w-[25vh] p-2 shadow-md">
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          to="/shoulder-arthroscopy"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Shoulder Arthroscopy
                        </Link>
                      </MenuItem>
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          to="/knee-arthroscopy"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Knee Arthroscopy
                        </Link>
                      </MenuItem>
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          to="/ankle-arthroscopy"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Ankle Arthroscopy
                        </Link>
                      </MenuItem>
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          to="/elbow-arthroscopy"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Elbow Arthroscopy
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              allowHover
            >
              <MenuHandler>
                <p className="block cursor-pointer relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out">
                  Eye Treatments
                </p>
              </MenuHandler>
              <MenuList className="w-[30vh] p-2 shadow-md">
                <MenuItem className="group py-3 px-4 bg-transparent hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                  <Link
                    to="/lasik-treatment"
                    className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                  >
                    Lasik Treatment
                  </Link>
                </MenuItem>
                <MenuItem className="group py-3 px-4 bg-transparent hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                  <Link
                    to="/comprehensive-eye-care"
                    className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                  >
                    Comprehensive eye care
                  </Link>
                </MenuItem>
                <MenuItem className="group py-3 px-4 bg-transparent hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                  <Link
                    to="/cataract-surgery"
                    className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                  >
                    Cataract surgey
                  </Link>
                </MenuItem>
                <MenuItem className="group py-3 px-4 bg-transparent hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                  <Link
                    to="/optic-nerve-disorders"
                    className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                  >
                    Optic nerve related disorders
                  </Link>
                </MenuItem>
                <MenuItem className="group py-3 px-4 bg-transparent hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                  <Link
                    to="/pediatric-eye-care"
                    className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                  >
                    Pediatric eye care
                  </Link>
                </MenuItem>
                <MenuItem className="group py-3 px-4 bg-transparent hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                  <Link
                    to="/retinal-disease-management"
                    className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                  >
                    Retinal Disease Management
                  </Link>
                </MenuItem>
                <MenuItem className="group py-3 px-4 bg-transparent hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                  <Link
                    to="/glaucoma-management"
                    className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                  >
                    Glaucoma management
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>

            {/* <Link
              to="/gallery"
              className={`block relative text-base font-source-medium ${
                location.pathname === "/gallery"
                  ? "text-orange-400"
                  : "text-black"
              } hover:text-orange-400 transition-all duration-300 ease-in-out`}
            >
              Gallery
              {location.pathname === "/gallery" && (
                <div className="absolute -bottom-1 left-0 w-full">
                  <div className="w-full h-[0.3vh] bg-orange-400 rounded-full" />
                </div>
              )}
            </Link> */}

            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.link/8p18eb"
              className="block"
            >
              <Button className="shadow-none hover:shadow-none bg-logoPrimary hover:bg-opacity-80 transition-all duration-300 ease-in-out rounded-md normal-case text-base px-5 py-3 text-white font-source-regular">
                Book an appointment
              </Button>
            </a>
          </div>

          {/* HAMBURGER MENU */}
          <Button
            className="block xl:hidden lg:block shadow-none hover:shadow-none bg-white border border-greyBorder rounded-full p-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            <HiBars2 className="w-5 h-5 text-greyText" />
          </Button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <Collapse open={showMenu}>
        <div className="bg-white border-t border-greyBorder p-5 text-black z-50">
          <Link
            to="/"
            className={`block relative text-base font-source-medium ${
              location.pathname === "/" ? "text-orange-400" : "text-black"
            } hover:text-orange-400 transition-all duration-300 ease-in-out`}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className={`mt-4 block relative text-base font-source-medium ${
              location.pathname === "/about-us"
                ? "text-orange-400"
                : "text-black"
            } hover:text-orange-400 transition-all duration-300 ease-in-out`}
          >
            About us
          </Link>

          <div
            className="mt-4 flex items-center gap-2"
            onClick={() => setOrthoMenu(!orthoMenu)}
          >
            <p className="block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out">
              Orthopaedic Expertise
            </p>
            {orthoMenu ? (
              <IoChevronDownOutline className="w-4 h-4 text-black" />
            ) : (
              <IoChevronForwardOutline className="w-4 h-4 text-black" />
            )}
          </div>

          <Collapse open={orthoMenu} className="pl-5">
            <div
              className="mt-4 flex items-center gap-2"
              onClick={() => setJointReplacement(!jointReplacement)}
            >
              <p className="block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out">
                Joint Replacement
              </p>
              {jointReplacement ? (
                <IoChevronDownOutline className="w-4 h-4 text-black" />
              ) : (
                <IoChevronForwardOutline className="w-4 h-4 text-black" />
              )}
            </div>

            <Collapse open={jointReplacement} className="pl-5">
              <Link
                href="/total-knee-joint-replacement"
                className="mt-4 block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out"
              >
                Total Knee and Joint Replacement
              </Link>
              <Link
                href="/total-hip-joint-replacement"
                className="mt-4 block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out"
              >
                Total Hip and Joint Replacement
              </Link>
              <Link
                href="/shoulder-joint-replacement"
                className="mt-4 block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out"
              >
                Shoulder Joint Replacement
              </Link>
            </Collapse>

            <Link
              href="/ortho-biologic-treatments"
              className="mt-4 block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out"
            >
              Ortho Biologic Treatments
            </Link>

            <div
              className="mt-4 flex items-center gap-2"
              onClick={() => setSportsInjury(!sportsInjury)}
            >
              <p className="block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out">
                Arthoroscopy and Sports Injury
              </p>
              {sportsInjury ? (
                <IoChevronDownOutline className="w-4 h-4 text-black" />
              ) : (
                <IoChevronForwardOutline className="w-4 h-4 text-black" />
              )}
            </div>

            <Collapse open={sportsInjury} className="pl-5">
              <Link
                href="/shoulder-arthroscopy"
                className="mt-4 block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out"
              >
                Shoulder Arthroscopy
              </Link>
              <Link
                href="/knee-arthroscopy"
                className="mt-4 block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out"
              >
                Knee Arthroscopy
              </Link>
              <Link
                href="/ankle-arthroscopy"
                className="mt-4 block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out"
              >
                Ankle Arthroscopy
              </Link>
              <Link
                href="/elbow-arthroscopy"
                className="mt-4 block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out"
              >
                Elbow Arthroscopy
              </Link>
            </Collapse>
          </Collapse>

          <div
            className="mt-4 flex items-center gap-2"
            onClick={() => setEyeMenu(!eyeMenu)}
          >
            <p className="block relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out">
              Eye Treatments
            </p>
            {eyeMenu ? (
              <IoChevronDownOutline className="w-4 h-4 text-black" />
            ) : (
              <IoChevronForwardOutline className="w-4 h-4 text-black" />
            )}
          </div>

          <Collapse open={eyeMenu} className="pl-5">
            <Link
              to="/lasik-treatment"
              className="mt-4 block text-base text-black font-source-medium transition-all duration-300 ease-in-out text-left leading-normal"
            >
              Lasik Treatment
            </Link>
            <Link
              to="/comprehensive-eye-care"
              className="mt-4 block text-base text-black font-source-medium transition-all duration-300 ease-in-out text-left leading-normal"
            >
              Comprehensive Eye Care
            </Link>
            <Link
              to="/cataract-surgery"
              className="mt-4 block text-base text-black font-source-medium transition-all duration-300 ease-in-out text-left leading-normal"
            >
              Cataract Surgery
            </Link>
            <Link
              to="/optic-nerve-disorders"
              className="mt-4 block text-base text-black font-source-medium transition-all duration-300 ease-in-out text-left leading-normal"
            >
              Optic nerve related disorders
            </Link>
            <Link
              to="/pediatric-eye-care"
              className="mt-4 block text-base text-black font-source-medium transition-all duration-300 ease-in-out text-left leading-normal"
            >
              Pediatric eye care
            </Link>
            <Link
              to="/retinal-disease-management"
              className="mt-4 block text-base text-black font-source-medium transition-all duration-300 ease-in-out text-left leading-normal"
            >
              Retinal Disease Management
            </Link>
            <Link
              to="/glaucoma-management"
              className="mt-4 block text-base text-black font-source-medium transition-all duration-300 ease-in-out text-left leading-normal"
            >
              Glaucoma Management
            </Link>
          </Collapse>

          {/* <Link
            href="/gallery"
            className={`mt-4 block relative text-base font-source-medium ${
              location.pathname === "/gallery"
                ? "text-orange-400"
                : "text-black"
            } hover:text-orange-400 transition-all duration-300 ease-in-out`}
          >
            Gallery
            {location.pathname === "/gallery" && (
              <div className="absolute -bottom-1 left-0 w-full">
                <div className="w-full h-[0.3vh] bg-orange-400 rounded-full" />
              </div>
            )}
          </Link> */}

          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.link/8p18eb"
            className="block"
          >
            <Button className="shadow-none hover:shadow-none bg-logoPrimary hover:bg-opacity-80 transition-all duration-300 ease-in-out rounded-md normal-case text-base px-5 py-3 text-white font-source-regular">
              Book an appointment
            </Button>
          </a>
        </div>
      </Collapse>
    </header>
  );
};

export default Header;
