'use client'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles'; 
import Search from './Search';
import Link from 'next/link'; 
import { Playfair_Display } from 'next/font/google'
 

export default function PrimarySearchAppBar() {
  
  return (
    <div className='flex-row' style={{width:'100vw'}}>
      <nav className="bg-slate-500 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 justify-evenly ">
          {/* <div className="flex h-16 justify-between  "> */}
            <Link href="/" className='flex flex-row '>
              <div className="flex   xs:hidden flex-shrink-2 items-center justify-center lg:text-3xl font-medium text-white
               py-2 ">
                GROWW STOCKS
              </div></Link> 
              <div className="lg:ms-80 w-100 sm:w:50 sm:ml-5" >
            <Search />           
              </div>
          {/* </div> */}
        </div>
      </nav>
    </div>
  );
} 
