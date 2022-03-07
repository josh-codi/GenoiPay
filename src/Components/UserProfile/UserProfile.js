import React from 'react'

import './UserProfile.css'
import image from '../../Images/Logo.png'

export default function UserProfile() {
  return (
    <div className='userProfile'>
        <section className='profile_brief'>
            <img src={image} alt='userImage' width={'40px'}/>
            <aside>
                <b>{'Unverified'}</b><br/>
                <b>{'Odame Joshua'}</b>
            </aside>
            <img alt='img' src="https://img.icons8.com/ios/15/000000/expand-arrow--v1.png"/>
        </section>
        <section>
            
        </section>
    </div>
  )
}
