import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import './Features.css'
import FeaturesPoints from './FeaturesPoints'

function Features() {
  const [data, setData] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "feature"]{
      title,
      subTitle,
      features[]{
        title,
        description,
        icon{
          asset->{
            url
          }
        }
      }
    }`
      )
      .then((data) => setData(data))
      .catch(console.error)
  }, [])

  return (
    <div className='container' id='features'>
      <div className='features-container'>
        <h4 className='pre-text'>{data[0]?.title}</h4>
        <h1 className='ftitle'>{data[0]?.subTitle}</h1>
        <div className='features-content'>
          {data[0]?.features?.map((feature, index) => {
            return (
              <FeaturesPoints
                key={index}
                icon={feature.icon.asset.url}
                heading={feature.title}
                paragraph={feature.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features
