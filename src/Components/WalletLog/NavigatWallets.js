import React, { useState } from 'react'

import './NavigationLog.css';
import image from '../../Images/Logo.png'

export default function NavigatWallets(props) {
    const Active =()=>{
        return(
            <div className='content'>
                <ul>

                    <li className='flex justify_sb'>
                        <b className='flex'>
                            <img alt='img' src={image} width={'40px'}/>
                            <b>EUR Wallet<br/>EUR</b>
                        </b>
                        <b>
                            {'$2,000,000.00'}<br/>{'Default'}
                        </b>
                    </li>

                    <li className='flex justify_sb'>
                        <b className='flex'>
                            <img alt='img' src={image} width={'40px'}/>
                            <b>EUR Wallet<br/>EUR</b>
                        </b>
                        <b>
                            {'$2,000,000.00'}<br/>{'Default'}
                        </b>
                    </li>


                    <li className='flex justify_sb'>
                        <b className='flex'>
                            <img alt='img' src={image} width={'40px'}/>
                            <b>EUR Wallet<br/>EUR</b>
                        </b>
                        <b>
                            {'$2,000,000.00'}<br/>{'Default'}
                        </b>
                    </li>

                </ul>
            </div>
        )
    }
    
    const Inactive =()=>{
        return(
            <div className='content'>
                <h1>Inactive Wallets</h1>
            </div>
        )
    }
    
    const Closed =()=>{
        return(
            <div className='content'>
                <h1>Closed Wallets</h1>
            </div>
        )
    }
    const [RouteTo, setRouteTo] = useState(Active);

    const setActiveLink=(e)=>{
        
    }
    const setPage=(e)=>{
        setActiveLink(e);

        let contentName = e.target.id;
        switch (contentName){
            case 'Active':
                setRouteTo(Active)
                break
            case 'Inactive':
                setRouteTo(Inactive)
                break
            case 'Closed':
                setRouteTo(Closed)
                break
            default:
                setRouteTo(Active)
        };

        

        
    }
  return (
    <div className='NavigationLog'>
        <ul className='nav'>
            <li onClick={setPage} className={'activeLink'} id='Active'>{`Active ${'(' + (props.activeWallets || 0) + ')'}`}</li>
            <li onClick={setPage} id='Inactive'>{`Inactive ${'(' + (props.inactiveWallets || 0) + ')'}`}</li>
            <li onClick={setPage} id='Closed'>{`Closed ${'(' + (props.closedWallets || 0) + ')'}`}</li>
        </ul><br/>
        <section>
            {RouteTo}
        </section>
        
    </div>
  )
}
