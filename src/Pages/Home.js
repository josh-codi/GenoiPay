import React from 'react'
import Activities from '../Components/Activities'
import AllWallet from '../Components/AllWallet/AllWallet'
import Header from '../Components/Header/Header'
import QuickLinks from '../Components/QuickLinks'

export default function Home() {
  return (
    <div className='home page'><br/>
      <Header contentName={'home'}/>

      <section className='mainContent'><br/>

        <div className='allWallets'>
          <AllWallet cards={''}/>
        </div><br/><br/>

        <div className='quickLinks'>
          
          <QuickLinks/>
        </div><br/><br/>

        <div className='activities'>
          <Activities/>
        </div><br/><br/>

      </section>

    </div>
  )
}
