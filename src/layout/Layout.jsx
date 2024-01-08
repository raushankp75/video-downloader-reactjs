import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='md:h-[100vh] h-[90vh] w-[100%] flex justify-center items-center bg-gradient-to-b from-[#222] from-10% via-[#333] via-30% to-[#444] to-90%'>
            {children}
        </div>
    )
}

export default Layout