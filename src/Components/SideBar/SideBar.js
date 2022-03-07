import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Invite from '../Invite';
import Logo from '../Logo';
import NavSection from '../NavSection';
import Wallet from '../Wallet';

import './SideBar.css'

export default function SideBar() {
  
    const Content =()=>{
        return(
            <div className='SideBar flex-column'>
                <br/>
                <Logo/><br/>
                <Wallet/><br/>
                <NavSection/><br/>
                <Invite/><br/><br/>
            </div>
        )
    }

  return ReactDOM.createPortal(
    <Content />, 
    document.getElementById('side_bar')
  )
}