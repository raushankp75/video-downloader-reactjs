import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='h-[100vh] w-[100%] flex justify-center items-center bg-gradient-to-b from-[#222] from-10% via-[#333] via-30% to-[#555] to-90%'>
            {children}
        </div>
    )
}

export default Layout