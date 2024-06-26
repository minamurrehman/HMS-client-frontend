import React from "react";
import { Link } from "react-router-dom";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/logo.svg";
import { useAuthStore } from "@/store";
const navigation = [
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
  { name: "Team", href: "#team" },
];

const Navbar = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <Popover className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 ">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link to="/">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto sm:h-10" src={Logo} alt="Logo" />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-theme-primary">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
            {user?.data?.id ? (
              <span className="inline-flex rounded-md shadow">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-theme-primary hover:bg-gray-50"
                >
                  Dashboard
                </Link>
              </span>
            ) : (
              <span className="inline-flex rounded-md shadow">
                <Link
                  to="/login"
                  className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-theme-primary hover:bg-gray-50"
                >
                  Log in
                </Link>
              </span>
            )}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img className="h-8 w-auto" src={Logo} alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-theme-primary">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            {user?.data?.id ? (
              <Link
                to="/dashboard"
                className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-theme-primary hover:bg-gray-100"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-theme-primary hover:bg-gray-100"
              >
                Log in
              </Link>
            )}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
