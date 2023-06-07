import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const socialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-6'>
        <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/amritthapa69/'
        target="_blank"
        rel='noreferrer'
        >
            <AiFillLinkedin  />
        </a>

        <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.twitter.com'
        target='_blank'
        rel='noreferrer'
        >
            <AiFillTwitterCircle  />
        </a>

        <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.facebook.com/amrit.thapa.336717'
        target='_blank'
        rel='noreferrer'
        >
            < BsFacebook />
        </a>

        <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.instagram.com'
        target='_blank'
        rel='noreferrer'
        >
            <  AiFillInstagram/>
        </a>
    </div>
  )
}

export default socialMediaIcons