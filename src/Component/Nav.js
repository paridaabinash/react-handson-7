import React from 'react'
import { Link } from 'react-router-dom'
import  '../style.css'

const Nav = () => {
  return (
    <div className='nav__container'>
      <ul>
        <li><Link to= "/home" style={{textDecoration: 'none', color : 'aliceblue'}} >HOME</Link> </li>
        <li> <Link to= "/student" style={{textDecoration: 'none', color : 'aliceblue'} } >Student</Link></li>
       <li><Link to= "/contact" style={{textDecoration: 'none', color : 'aliceblue'}} >Contact</Link> </li>
       </ul>
       {/* <Link to= "/home" >HOME</Link>
       <Link to= "/student" >Student</Link>
       <Link to= "/contact" >Contact</Link> */}
    </div>
  )
}

export default Nav