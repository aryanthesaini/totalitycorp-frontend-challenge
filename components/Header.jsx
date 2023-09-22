'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Wrapper from './Wrapper';

import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import MenuMobile from './MenuMobile';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 translate-y-0`}>
      <Wrapper className='h-[60px] flex justify-between items-center'>
        <Link href='/'>
          <img src='/logo.svg' alt='logo' className='w-[40px] md:w-[60px]' />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        <div className='flex items-center gap-2 text-black'>
          {/* Icon start */}

          <Link href='/cart'>
            <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover: bg-black/[0.05] cursor-pointer relative'>
              <BsCart className='text-[15px] md:text-[20px]' />
              <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>
                5
              </div>
            </div>
          </Link>

          {/* Icon End */}

          {/* Mobile Icon start */}
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex  md:hidden justify-center items-center hover: bg-black/[0.05] cursor-pointer relative -mr-2'>
            {mobileMenu ? (
              <VscChromeClose
                className='text-[16px]'
                onClick={() => {
                  setMobileMenu(false);
                }}
              />
            ) : (
              <BiMenuAltRight
                className='text-[20px]'
                onClick={() => {
                  setMobileMenu(true);
                }}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
