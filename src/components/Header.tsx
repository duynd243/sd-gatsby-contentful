import { Link } from 'gatsby';
import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';

const navigationItems = [
  {
    name: 'Calculator',
    url: '#calculator',
  },
  {
    name: 'Services',
    url: '#services',
  },
];

function Header() {
  return (
    <div className="flex items-center justify-between px-[3rem] py-8 md:px-[9.38rem] md:py-[2.56rem]">
      {/* Logo */}
      <div className="z-10 flex items-center gap-[1.22rem]">
        <div className="flex items-center">
          <div className="flex aspect-square w-[3.3125rem] items-center justify-center rounded-full bg-[#FF8049]">
            <span className="text-center text-[1.5625rem] font-[800] italic leading-[130%] text-white">
              K
            </span>
          </div>
        </div>
        <div className="text-[1.25rem] font-[700] leading-[130%] text-white">
          Kinda
          <br />
          Finance
        </div>
      </div>
      {/* Navigation */}
      <div className="relative">
        {/*Mobile hamburger menu*/}
        <div className="md:hidden">
          <Menubar.Root>
            <Menubar.Menu>
              <Menubar.Trigger asChild>
                <button className="z-10">
                  <svg
                    width="24"
                    height="16"
                    viewBox="0 0 24 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="2" fill="white" />
                    <rect y="7" width="24" height="2" fill="white" />
                    <rect y="14" width="24" height="2" fill="white" />
                  </svg>
                </button>
              </Menubar.Trigger>
              <Menubar.Portal>
                <Menubar.Content
                  className="z-50 min-w-[200px] max-w-[100vw] rounded-md bg-[#3f4554] p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] md:hidden"
                  sideOffset={20}
                  align="end"
                >
                  {navigationItems.map((item) => (
                    <Menubar.Item
                      key={item.name}
                      className="rounded-md transition-all data-[highlighted]:bg-[#FF8049]"
                    >
                      <Link className="block px-4 py-3 text-white" to={item.url}>
                        {item.name}
                      </Link>
                    </Menubar.Item>
                  ))}
                </Menubar.Content>
              </Menubar.Portal>
            </Menubar.Menu>
          </Menubar.Root>
        </div>

        {/*Desktop navigation*/}
        <ul className="hidden items-center space-x-[3.81rem] md:flex">
          {navigationItems.map((item) => (
            <li className="text-[1.125rem] font-[400] leading-[180%] text-white">
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
