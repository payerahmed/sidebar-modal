import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {  useGlobalContext, AppContext } from './context'
const Home = () => {
  const data = useGlobalContext()
  const usCntx = useContext(AppContext)
  console.log(data,'data')
  console.log('uscntx: ', usCntx)
  const { openSidebar, openModel } = useGlobalContext()
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
     
      <button className="btn" onClick={openModel}>
        show modal
      </button>
    </main>
  )
}

export default Home
