'use client'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles'; 
import Search from './Search';
import Link from 'next/link'; 
import { Playfair_Display } from 'next/font/google'
 

export default function PrimarySearchAppBar() {
  
  return (
    <div className='flex-row'>
      <nav className="bg-slate-500 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 justify-start  ">
            <Link href="/" className='flex flex-row '>
              <div className="flex flex-shrink-0 items-center lg:text-3xl font-medium text-white
               py-2 sm:text-xl">
                GROWW STOCKS
              </div></Link> 
              <div className=" ml-2 lg:ms-80 w-100 sm:w:50 sm:ml-5" >
            <Search />           
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
} 