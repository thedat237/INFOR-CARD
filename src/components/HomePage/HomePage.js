import React from 'react'
import Banner01 from './Banner/Banner01'
import Banner02 from './Banner/Banner02'
import Banner03 from './Banner/Banner03'
import Banner04 from './Banner/Banner04'

export default function HomePage() {
    return (
        <div>
            <div>
                <Banner01/>
            </div>
            <div className='my-5'>
                <Banner02/>
            </div>
            <div>
                <Banner03/>
            </div>
            <div>
                <Banner04/>
            </div>
        </div>
    )
}
