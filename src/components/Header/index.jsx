import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='Header'>
        <h3>Finesweet</h3>
        <ul>
            <li><Link to='#about'>About Us</Link></li>
            <li><Link to='#career'>Careers</Link></li>
            <li><Link to='#service'>Services</Link></li>
            <li><Link to='#blog'>Blog</Link></li>
            <li><Link to='#contact'>Contact Us</Link></li>
           <li><button>Clone Project</button></li> 
        </ul>
    </div>
  )
}
