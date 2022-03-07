import React, { useEffect, useState } from 'react'

import Search from '../SearchBar/Search'
import UserPlants from '../UserPlants/UserPlants'
import UserProfile from '../UserProfile/UserProfile'
import './Header.css'

export default function Header(props) {
  const [menu, setMenu]=useState(true);

  useEffect(()=>{
    let bar = window.document.getElementById('side_bar');
    let back_drop = window.document.getElementById('back_drop');
    if(!menu){
      bar.classList.remove('hide_sideBar');
      bar.classList.add('show_sideBar');

      back_drop.classList.remove('hide');
      back_drop.classList.add('show');
      
    }
    if(menu){
      bar.classList.add('hide_sideBar');
      bar.classList.remove('show_sideBar');

      back_drop.classList.add('hide');
      back_drop.classList.remove('show');
    }
  });

  
  const menuHandler=()=>{
    setMenu(!menu);
    window.addEventListener('resize', ()=>{
      setMenu(true)
    });
  };
  

  return (
    <div className='header'>
        <section className='flex' style={{"alignItems":"center"}}>
          <aside onClick={menuHandler} style={{"width": "100px"}} className='menuContainer'>
            {menu ? (
              <div className='menuButton'>
              <div/>
              <div/>
              <div/>
            </div>
            ) : (
              <div className='closeButton'>
                <img alt='img' src="https://img.icons8.com/ios-glyphs/20/000000/delete-sign.png"/>
              </div>
            )}
          </aside>
          <h3 className='flex' style={{"alignItems": "center","margin":"auto"}}>{props.contentName === 'home' ? `Welcome\t ${props.userName || ''}` : `${props.contentName}`}</h3>
        </section>
        <section className='right_side'>
          <div className='search_one'>
          <Search/>
          </div>

          <UserPlants/>

          <img alt='img' src="https://img.icons8.com/small/20/000000/appointment-reminders--v1.png" className='notification'/>

          <UserProfile/>
        </section>
        
        <div className='changeSearchBarPositon'>
          <Search/>
        </div>
    </div>
  )
}
