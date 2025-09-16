import React from 'react'

const Nav = () => {
  return (
  <div className="navbar bg-blue-950 shadow-sm justify-between items-center">
    {/* //for mobile view */}
  <div className="navbar-start flex justify-between w-full lg:w-auto px-14">

        <a className="btn btn-ghost text-xl">Rk-planner</a>

    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100  rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a >Home</a></li>
        <li>
          <a>Service</a>
          <ul className="p-2">
            <li><a>Home Decor</a></li>
            <li><a>Aamin service</a></li>
            <li><a>Room Decor</a></li>
            <li><a>Furniture</a></li>
          </ul>
        </li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  </div>
  {/* //for desktop view  */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl">
      <li><a >Home</a></li>
      <li>
        <details>
          <summary>Service</summary>
          <ul className="p-2">
            <li><a>Aamin service</a></li>
            <li><a>Room Decor</a></li>
            <li><a>Furniture</a></li>
            <li><a>Home Decor</a></li>

          </ul>
        </details>
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">dark/light</a>
  </div> */}
</div>
  )
}

export default Nav