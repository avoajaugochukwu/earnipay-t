import React from 'react'
import logo_white_bg from '../../assets/img/logo_white_bg.png'
import Button from '../Button'


const Header = () => {
  return (
    <div className='flex justify-between mt-12 mx-[8.5rem] bg-gray-200'>
      <img style={{ width: '12%' }} src={logo_white_bg} alt="logo" />
      <div className='flex w-1/2 justify-between text-gray-500 pt-2'>
        <p>About</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Testimonial</p>
        <p>Help</p>
      </div>
      <div className='flex justify-between'>
        <a className='py-2 mr-5'>Sign In</a>
        <div>
        <Button label='Sign Up' border='thick' type="round" />
        </div>
        
      </div>
    </div>
    
  )
}

export default Header