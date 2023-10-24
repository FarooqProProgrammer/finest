import React from 'react'
import "./index.scss"

export default function Header() {
  return (
    <div className='Header'>
        <h3>Finesweet</h3>
        <ul>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Contact Us</a></li>
           <li><button>Clone Project</button></li> 
        </ul>
    </div>
  )
}
