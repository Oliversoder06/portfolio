import Image from 'next/image'
import React from 'react'

const Project = ({ image, label, color }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className='w-[300px] h-[220px] xs2:w-[500px] xs2:h-[312px] md2:w-[624px] md2:h-[390px] rounded-[35px] md2:rounded-[44px] border-[2px] border-solid border-[#1B1D25] flex-shrink-0 flex items-center justify-center relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='relative w-[240px] h-[170px] xs2:w-[432px] xs2:h-[260px] md2:w-[540px] md2:h-[324px] flex-shrink-0 bg-[#141414] flex items-center justify-center hover:scale-[1.02] transition-all duration-300 HoverCursor'>
                {image ? (
                    <div className='relative w-full h-full'>
                        <Image
                            src={image}
                            width={540}
                            height={324}
                            className={`md2:w-[540px] md2:h-[324px] w-[90%] h-[90%] HoverCursor transition-all duration-300 ${isHovered ? 'blur-md' : ''}`}
                        />
                        <h1
                            className={`absolute bottom-[50%] flex justify-center text-[${color}] xs2:text-5xl font-Monda HoverCursor transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        >
                            {label}
                        </h1>
                    </div>
                ) : (
                    <div className='text-white xs2:text-5xl font-Monda'>N/A</div>
                )}
            </div>
        </div>
    );
}

export default Project;
