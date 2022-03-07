import React from 'react'

import LogoImage from '../Images/Logo.png'
import '../Styles/Logo.css';

export default function Logo() {
  return (
    <div className='logo'>
        <img src={`${LogoImage}`} alt='logo' width={'40px'}/>
        <aside><b>Genio</b>Pay</aside>
    </div>
  )
}
