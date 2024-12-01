/* REACT IMPORTS */
import { Link, useLocation } from "react-router-dom";

/* MATERIAL TAILWIND COMPONENTS */
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

/* REACT ICONS */
import { FaChevronRight } from "react-icons/fa6";

const Header = () => {
  const location = useLocation();

  return (
    <header className="relative z-50 bg-white py-4 header-shadow">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="text-xl font-inter-extrabold text-black uppercase"
          >
            LOGO PLACEHOLDER
          </Link>

          {/* NAVIGATION LINKS AND BUTTON */}
          <div className="flex items-center gap-12">
            <Link
              href="/"
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
              href="/about-us"
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

            <Menu
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              allowHover
            >
              <MenuHandler>
                <p className="block cursor-pointer relative text-base font-source-medium text-black hover:text-orange-400 transition-all duration-300 ease-in-out">
                  Our Expertise
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
                          href="/knee-joint-replacement"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Total Knee & Joint Replacement
                        </Link>
                      </MenuItem>
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          href="/hip-joint-replacement"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Total Hip & Joint Replacement
                        </Link>
                      </MenuItem>
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          href="/shoulder-joint-replacement"
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
                    href="/ortho-biologic-treatments"
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
                          href="/shoulder-arthroscopy"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Shoulder Arthroscopy
                        </Link>
                      </MenuItem>
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          href="/knee-arthroscopy"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Knee Arthroscopy
                        </Link>
                      </MenuItem>
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          href="/ankle-arthroscopy"
                          className="block text-base text-black font-source-regular group-hover:text-orange-400 transition-all duration-300 ease-in-out text-left leading-normal"
                        >
                          Ankle Arthroscopy
                        </Link>
                      </MenuItem>
                      <MenuItem className="group py-3 px-4 bg-white hover:bg-logoRed hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out">
                        <Link
                          href="/elbow-arthroscopy"
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

            <Link
              href="/what-we-treat"
              className={`block relative text-base font-source-medium ${
                location.pathname === "/what-we-treat"
                  ? "text-orange-400"
                  : "text-black"
              } hover:text-orange-400 transition-all duration-300 ease-in-out`}
            >
              What we treat
              {location.pathname === "/what-we-treat" && (
                <div className="absolute -bottom-1 left-0 w-full">
                  <div className="w-full h-[0.3vh] bg-orange-400 rounded-full" />
                </div>
              )}
            </Link>

            <Link
              href="/gallery"
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
            </Link>

            <Link to="/book-an-appointment" className="block">
              <Button className="shadow-none hover:shadow-none bg-logoPrimary hover:bg-opacity-80 transition-all duration-300 ease-in-out rounded-md normal-case text-base px-5 py-3 text-white font-source-regular">
                Book an appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
