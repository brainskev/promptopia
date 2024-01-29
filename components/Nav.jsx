"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, UseEffect } from 'react';
import { sigIn, singOut, useSessio, getProviders }
from 'next-auth/react';

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3' >
        <Link href = '/' className='flex gap-2 flex-center'>
            <Image src= '/assets/images/logo.svg'
            alt='Promptpia Logo'
            width={30}
            height={40}
            className='object-contain'


            />
        </Link>

    </nav>
  )

}
export default Nav