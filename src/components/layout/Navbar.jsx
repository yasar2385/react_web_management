import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

import React from "react";
const user = {
  name: "Akash",
  email: "User@test.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/" },
  { name: "About NOORUL ILM", href: "/User" },
  { name: "Admission & Dept", href: "/Admin" },
  // { name: "Office & Dept", href: "/Office" },
  { name: "Service of NOORUL ILM", href: "/Report" },
  { name: "Contacts", href: "/Contacts" },
  // { name: "Calendar 1444 - 2022/23", href: "/Report" },
];
const userNavigation = [
  { name: "Your Profile", href: "/User" },
  { name: "Settings", href: "/" },
  { name: "Sign out", href: "/LogOut" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(props) {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-100">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex-shrink-0 items-center">
                    NOORUL ILM ISLAMIC COLLEGE FOR WOMEN
                  </div>
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) => {
                              return (
                                "rounded-md px-3 py-2 text-sm font-medium" +
                                (!isActive
                                  ? " text-darkgreen-300"
                                  : " text-darkgreen-100 bg-green-100")
                              );
                            }}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow hidden">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"></div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {props.children}
          </div>
        </main>
        <footer>
          <div className="footer bg-green-200" id="footerDiv">
            <div className="flex p-10">
              <div className="" id="">
                <div className="">
                  NOORUL ILM ISLAMIC COLLEGE FOR WOMEN (NIILCW)
                </div>
                <div>
                  <span className="font-semibold">Run By:</span> AL-AMEEN MASJID
                  AND MADARSHA
                </div>
                <span>All Rights Reserved 2023.</span>
              </div>
              <div className="mx-auto">
                <h5 className="flex">
                  <span className="inline-block pr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.25}
                      stroke="currentColor"
                      className="w-5 h-4 mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold text-lg">Location</span>
                    <br />
                    1/45, South Ave, Muthamizh Nagar, Kodungaiyur,
                    <br /> Chennai, Tamil Nadu - 600118.
                    <br />
                  </div>
                </h5>
                <div className="flex mt-3">
                  <span className="inline-block pr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.25}
                      stroke="currentColor"
                      className="w-5 h-4 mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <div className="">
                    <a href="#">noorulilm@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="">
                <h6 className="font-bold">QUICK LINKS</h6>
                <div className="">
                  <ul className="list-none">
                    <li>
                      <a href="#">Extra Curriculum</a>
                    </li>
                    <li>
                      <a href="#">Students Corner</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-black text-center text-white">
              <div>
                Developed by <a href="#">AYAZ_Digital</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
