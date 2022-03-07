
import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Styles/NavSection.css'

export default function NavSection(props) {
  return (
    <ul className='nav_container nav flex-column'>
        <li className='nav-item'>
            
            <NavLink to={'/'} className='nav-link'>
            <img alt='img' src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/20/000000/external-dashboard-user-interface-kmg-design-detailed-outline-kmg-design.png"/>
                Dashboard
            </NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to={'wallet'} className='nav-link'>
            <img alt='img' src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/20/000000/external-wallet-business-kiranshastry-lineal-kiranshastry-2.png"/>
                Wallet
            </NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to={'cards'} className='nav-link'>
            <img alt='img' src="https://img.icons8.com/external-modern-lines-kalash/20/000000/external-card-finance-and-banking-modern-lines-kalash.png"/>
                Cards
            </NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to={'fx'} className='nav-link'>
            <img alt='img' src="https://img.icons8.com/ios/20/000000/money-box--v2.png"/>
                FX Center
            </NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to={'beneficiaries'} className='nav-link'>
            <img alt='img' src="https://img.icons8.com/small/20/000000/group-foreground-selected.png"/>
                Beneficiaries
            </NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to={'perks'} className='nav-link'>
            <img alt='img' src="https://img.icons8.com/small/20/000000/tags.png"/>
                Perks
            </NavLink>
        </li>
    </ul>
  )
}
