import Link from 'next/link'
import Image from 'next/image'
// import Logo from "../components/Logo";
import cn from 'classnames'
import ImgLogo from 'public/img/logo-hofmann.jpeg'
import { List, Phone, X } from 'phosphor-react'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

import { withRouter } from 'next/router'

const navigation = [
  { name: 'Home', href: '/', current: true },
  {
    name: 'Leistungen',
    href: '/#leistungen',
    href2: '/leistungen',
    current: false,
  },
  { name: 'Projekte', href: '/projekte', href2: '/projekte', current: false },
  { name: 'Über uns', href: '/ueber', href2: '/ueber', current: false },
]

const Navbar = ({ router }) => {
  let path = router.pathname
  path = '/' + path.split('/')[1]

  return (
    <Disclosure
      as="nav"
      className="group sticky top-0 z-[9999] bg-white text-black "
    >
      {({ open }) => (
        <>
          <div className="mx-auto py-2 px-4 group-hover:bg-white sm:px-6 lg:px-16">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start sm:items-center sm:justify-between">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-10 w-auto lg:hidden"
                    src={ImgLogo}
                    height="50"
                    alt="Volker Voltaik"
                  />
                  <Image
                    className="hidden h-10 w-auto lg:block"
                    src={ImgLogo}
                    height="50"
                    alt="Volker Voltaik"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          item.href == path || item.href2 == path
                            ? 'decoration-yellow border-b-2 border-b-darkBlue  hover:bg-black/10'
                            : 'hover:decoration-yellow decoration-2 underline-offset-2 hover:bg-black/10 hover:underline',
                          'px-[20px] py-[10px] font-medium text-black'
                        )}
                        aria-current={item.href == path ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:flex">
                <CallToActionNav />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <List className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-2 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    //  if href or href2 is equal to path, then add underline
                    className={cn(
                      item.href == path || item.href2 == path
                        ? 'bg-black text-white '
                        : 'hover:text-white',
                      'hover:bg-yellow block rounded-md px-3 py-2 text-base font-medium transition-all duration-75'
                    )}
                    aria-current={item.href == path ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default withRouter(Navbar)

const CallToActionNav = () => {
  return (
    <Link href="#kontakt" className=" cursor-pointer">
      <span
        className="hover:bg-yellow hidden w-[11em]  items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white md:flex"
        aria-label="Angebot anfragen"
      >
        Angebot anfragen
      </span>
      <span
        className="hover:bg-yellow flex items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white md:hidden"
        aria-label="Angebot anfragen"
      >
        <Phone size={32} />
      </span>
    </Link>
  )
}
