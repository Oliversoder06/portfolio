import React from 'react'

const Input = ({ placeholder, label, type }) => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={label} className='text-white font-Monda text-2xl cursor-none HoverCursor ml-4'>{label}</label>
            <input type={type} placeholder={placeholder} id={label} className='w-[575px] h-[67px] rounded-md border-[1px] border-[#1d1d1d] bg-[rgba(7,7,7,0.2)] cursor-none HoverCursor pl-4 text-white text-[20px] placeholder:text-[rgba(255,255,255,0.20)]' />
        </div>
    )
}

export default Input