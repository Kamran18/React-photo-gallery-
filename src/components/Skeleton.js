import React from 'react'
import './Skeleton.css'

function Skeleton() {
    return (
        <div className='skeleton'>
            <div className='shimmer-wrap'>
                <div className='shimmer'/>
            </div>
        </div>
    )
}

export default Skeleton
