import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className='bg-black text-white pt-14 pb-3'>
      <Wrapper className='flex justify-between flex-col md:flex-row gap-[50px] md:gap-0'>
        {/* RIGHT START */}
        <div className='flex gap-4 justify-center md:justify-start'>
          <div className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
            <FaFacebookF size={20} />
          </div>
          <div className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
            <FaTwitter size={20} />
          </div>
          <div className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
            <FaYoutube size={20} />
          </div>
          <div className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
            <FaInstagram size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className='flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0'>
        {/* LEFT START */}
        <div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left'>
          © 2023 Aryan Saini
        </div>
        {/* LEFT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
