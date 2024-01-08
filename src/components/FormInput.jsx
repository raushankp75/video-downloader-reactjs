import React from 'react'

const FormInput = ({ setLink, submitHandler }) => {
    return (
        <form onSubmit={submitHandler}>
            <div className='w-full h-12 flex rounded-md overflow-hidden border-2 border-red-500 shadow'>
                <input
                    type="text"
                    onChange={(e) => setLink(e.target.value)}
                    placeholder='Paste a Link to Download'
                    className='outline-none w-full px-2 py-3 text-[#222]'
                />
                <button
                    className='px-3 py-2 text-white text-xl font-semibold duration-300 ease-in-out active:scale-75 active:shadow-none bg-gradient-to-r from-red-500 via-pink-500 to-red-400'
                >Fetch
                </button>
            </div>
        </form>
    )
}

export default FormInput