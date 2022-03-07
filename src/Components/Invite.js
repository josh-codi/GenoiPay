import React from 'react'

import Button from './Button'
import '../Styles/Invite.css'

export default function Invite() {
  return (
    <div className='invite_friend'>
        <section>
            <img alt='img' src="https://img.icons8.com/small/35/000000/megaphone.png"/>
            <p><b>Refer and earn</b><br/>Use the below link to invite friend</p>
        </section>
        <Button className={'transparent btn'}>Invite Friends</Button>
    </div>
  )
}
