import React from 'react'

function FeaturesPoints({icon, heading, paragraph}) {

    return (
            <div className='features-points' style={{ }}>
                {icon}
                <h4 style={{margin: '0.8rem 0'}}>{heading}</h4>
                <p>{paragraph}</p>
            </div>
    )
}

export default FeaturesPoints
