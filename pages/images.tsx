import React from 'react'
import normal from '../public/normal.jpg';
import Image from 'next/image';

const images = () => {

    // Nextjs Image test loading

  return (
    <>
    <div className=' m-auto border border-red-600 border-solid w-1/2 h-screen flex-col'>
        <section className='h-1/2 border-orange-500 border-solid border' >
        <img src="/normal.jpg" className='object-cover'/>
        </section>
        <section className='h-1/2 border-orange-500 border-solid border relative' >
            {/* <img src={myimage} width="100" height="100" /> */}
            <Image src={normal} layout="fill" objectFit="cover"/>
        </section>
    </div>
    </>
  )
}

export default images