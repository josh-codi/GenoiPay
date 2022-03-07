import React from 'react'

import './AllWallet.css'
import image from '../../Images/Logo.png'

export default function AllWallet(props) {
  if (props.cards === ''){
      return(
      <div className='allWallet'>
          <div className='flex justify_sb'>
          <h3>All Wallets</h3>
          <b>View More</b>
          </div>
          <section className='row allWallet_container'>

            <div className='card col-4'>
                <section className='card-content'>
                    <div className='card_name'>
                        <h5>Personal Account<br/>USD</h5>
                        <img src={image} width={'40px'} alt={'card'}/>
                    </div>
                    <h4>{'$'}543,345{'.00'}</h4>
                </section>
            </div>

            <div className='card col-4'>
                <section className='card-content'>
                    <div className='card_name'>
                        <h5>EUR Wallet<br/>EUR</h5>
                        <img src={image} width={'40px'} alt={'card'}/>
                    </div>
                    <h4>{'€'}543,345{'.00'}</h4>
                </section>
            </div>


            <div className='card col-4'>
                <section className='card-content'>
                    <div className='card_name'>
                        <h5>School Fees<br/>GBP</h5>
                        <img src={image} width={'40px'} alt={'card'}/>
                    </div>
                    <h4>{'£'}543,345{'.00'}</h4>
                </section>
            </div>
        </section>
      </div>
      )}
}
