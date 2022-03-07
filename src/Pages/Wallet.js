import React from 'react'

import Header from '../Components/Header/Header'
import Button from '../Components/Button'
import '../Styles/WalletPage.css'
import WalletLog from '../Components/WalletLog/WalletLog'
import SelectedDetails from '../Components/WalletLog/SelectedDetails'


export default function Wallet () {
  return (
    <div className='wallet page'><br/>
      <Header contentName={'Wallet'}/>

      <section className='mainContent'><br/>
        
        <div className='wallet_subHeader'>
            <h4 className='t'>Your Wallet(s)</h4>
            <aside className='t'>
            <Button className={'btn create_wallet'} > + Create New Wallet </Button>
            </aside>
        </div><br/>
        
        <div className='inner row'>
            <WalletLog className={'wallet_dialog col-lg-5 col-md-9 col-sm-11'}/>
            <SelectedDetails className={'wallet_dialog col-lg-6 col-md-9 col-sm-11'} />
        </div>

      </section>

    </div>
  )
}
