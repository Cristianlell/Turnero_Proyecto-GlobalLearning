import React from 'react'
import Header from './Header'

const WithHeader = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    </>
  )

}

export default WithHeader