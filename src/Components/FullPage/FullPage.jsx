import React, { useEffect, useState } from 'react'

import Loading from '../Loading/Loading'
import FWL from './FWL'
const FullPage = () => {
  const [isLoading, setIsLoading] = useState()
  const [hide, setHide] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('opened')) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }

    setTimeout(() => {
      setHide('hide')
      setIsLoading(false)
    },11000)
    clearTimeout()
  },[])
  
  return (
    <>
      {isLoading || <FWL />}
      {isLoading && <Loading hide={hide} />}
    </>
  )
}

export default FullPage