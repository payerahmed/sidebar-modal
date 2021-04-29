import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [arr, setArr] = useState([1,2,3,4,5,6,7])
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openModel = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModel,
        closeModal,
        openSidebar,
        closeSidebar,
        arr
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
