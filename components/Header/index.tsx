import React from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  RefreshIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'

const solutions = [
  {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'About',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Collection',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'FAQ',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <Popover className="relative bgnavbar2 ">
        <div className="px-5 md:px-10 pt-5 pb-10 lg:pb-16 xl:pb-24">
          <div className="flex w-full justify-between items-center">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                {/* <img
                          className="h-10 w-auto sm:h-14"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        /> */}
                <img
                  className="h-10 w-auto sm:h-14 lg:h-20 object-contain"
                  src="./img/poms_world.png"
                  alt=""
                />
              </a>
            </div>
            <div className="md:hidden">
              <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-white hover:text-ijo focus:outline-none focus:ring-2 focus:ring-inset focus:ring-birumuda">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10 uppercase">

              <a href="#" className="text-2xl lg:text-4xl text-ijo hover:text-birumuda font-bold">
                Home
              </a>
              <a href="#" className="text-2xl lg:text-4xl text-ijo hover:text-birumuda font-bold">
                About
              </a>
              <a href="#" className="text-2xl lg:text-4xl text-ijo hover:text-birumuda font-bold">
                Collection
              </a>
              <a href="#" className="text-2xl lg:text-4xl text-ijo hover:text-birumuda font-bold">
                FAQ
              </a>

            </Popover.Group>

          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-birumuda ">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    {/* <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    /> */}
                    <img
                      className="h-10 w-auto sm:h-14 lg:h-20 object-contain"
                      src="./img/poms_world.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-birumuda rounded-md p-2 inline-flex items-center justify-center text-white hover:text-ijo hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-gray-100" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-100">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

    </header>
  );
}