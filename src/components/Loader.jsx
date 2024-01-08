import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

const Loader = () => {
  return (
    <div className='w-full py-5 flex justify-center'><SyncLoader color='green' /></div> 
  )
}

export default Loader

