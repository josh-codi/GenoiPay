import React from 'react'

import Activities from '../../Components/Activities'
import Button from '../Button'

import './SelectedDetails.css'

export default function SelectedDetails(props) {
  return (
    <div className={`${props.className} SelectedDetails`}>
        <section className='sec_one flex justify_sb'>
            <div>
                <b>{'. Active'}</b><br/>
                <b>{'EUR Wallet'}</b><br/>
                <b>{'EUR'}</b>
            </div>
            <div>
                <h3>{'€2,345,857.20'}</h3>
            </div>
        </section>

        <section className='sec_two'>
            <div className='row'>
                <b className='col-lg-6'>Ledger Balance: €2,000,000.20</b>
                <b className='col-lg-6'>Total Income: €2,000,000.20</b>
                <b className='col-lg-6'>Blocked Balance: €2,000,000.20</b>
                <b className='col-lg-6'>Total Outgoing: €2,000,000.20</b>
            </div><br/>
            <div className='row'>
                <aside className='col-3'>
                    <Button className={'btn'}># Payment</Button>
                </aside>
                <aside className='col-3'>
                    <Button className={'btn'}># Pay In</Button>
                </aside>
                <aside className='col-3'>
                    <Button className={'btn'}># Exchange</Button>
                </aside>
            </div><br/>
            <div>
                <select name='More'>
                    <option value='DEFAULT' disabled>More Option</option>
                    <option value={'Withdraw'}>Withdraw</option>
                    <option value={'Withdraw'}>Withdraw</option>
                    <option value={'Withdraw'}>Withdraw</option>
                </select>
            </div><br/><br/>
        </section>
        
        
        <section className='sec_three'>
            <Activities/>
        </section>
    </div>
  )
}
