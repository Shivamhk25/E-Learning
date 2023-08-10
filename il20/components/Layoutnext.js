import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from './navbarnext.js'
import Footer from './footernext.js'

function layout({ children, toggleModal, propsdata }) {
  return (
    <div>
      <Navbar openModal={toggleModal} propsdata={propsdata} />
      {children}
      <Footer propsdata={propsdata} />
    </div>
  )
}

export default layout
