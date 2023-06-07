import React from 'react'
import SocialMediaIcons from '../component/socialMediaIcons'

const Footer = () => {
  return (
    <footer className='h-64 bg-red pt-10'>
        <div className='w-5/6 mx-auto' >
            <SocialMediaIcons />
            <div className='md:flex justify-center md:justify-between text-center'>
                <p className='font-playfair font-semibold text-2xl text-yellow'>
                    AMRIT THAPA
                </p>
                <p className='font-playfair text-md text-yellow'>©2023 AMRIT. All Right Reserved</p>
            </div>
        </div>
    </footer>
   
  )
}

export default Footer