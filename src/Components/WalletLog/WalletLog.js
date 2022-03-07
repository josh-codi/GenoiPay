import React from 'react'

import Search from '../SearchBar/Search'
import NavigatWallets from './NavigatWallets'
import './WalletLog.css'


export default function WalletLog(props) {
  return (
    <div className={`${props.className} currencies`}>
        <section className='top_sec'>
            <Search/>

            <div className='select'>
            <select name="All" id="all_currency">
                <option value='DEFAULT' disabled>All</option>

                <option value="USD">US Dollar</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>
            </div>
        </section>

        <section>
            <NavigatWallets/>
        </section>
    </div>
  )
}
