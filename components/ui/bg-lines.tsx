import React from 'react'

const BgLines = () => {
    return (
        <svg className="absolute w-[600px] h-[600px] opacity-40 z-[-10]" viewBox="0 0 600 600" fill="none">

            <path d="M180 280 H140 Q120 270 110 250 H90" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="180" cy="280" r="5" fill="blue" />
            <circle cx="90" cy="250" r="4" fill="blue" opacity="0.5" />

            <path d="M180 340 H130 Q110 350 100 370 H80" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="180" cy="340" r="5" fill="blue" />
            <circle cx="80" cy="370" r="4" fill="gray" opacity="0.5" />


            <path d="M420 280 H460 Q480 270 490 250 H510" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="420" cy="280" r="5" fill="blue" />
            <circle cx="510" cy="250" r="4" fill="gray" opacity="0.5" />


            <path d="M420 340 H470 Q490 350 500 370 H520" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="420" cy="340" r="5" fill="blue" />
            <circle cx="520" cy="370" r="4" fill="gray" opacity="0.5" />

        </svg>
    )
}

export default BgLines