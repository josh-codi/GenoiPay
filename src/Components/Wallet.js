import React from 'react';


import Button from './Button'
import '../Styles/Wallet.css'



export default function Wallet() {
  return (
    <div className='side_bar_wallet_balance'>
        <ul>
            <li>
                <img alt='img' src="https://img.icons8.com/small/35/000000/banknotes.png"/>
                <p>Wallet Balance<br/>{`$ 15, 001.00`}</p>
                <img alt='img' src="https://img.icons8.com/small/15/000000/visible.png"/>
            </li>
            <li>
                <img alt='img' src="https://img.icons8.com/small/35/000000/banknotes.png"/>
                <p>Wallet Balance<br/>{`$ 15, 001.00`}</p>
                <i> </i>
            </li><br/>
            <li>
                <Button className={'btn Pay_in'} payIn>Pay-In</Button>
                <Button className={'btn Pay_out'} payOut>Pay-Out</Button>
            </li>
        </ul>
    </div>
  )
}
