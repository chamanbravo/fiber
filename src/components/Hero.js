import React from 'react'
import Button from './Button'
import './Hero.css'

function Hero({background, reviewText, titleText, descText, btnClasss1, btnClass2, btnText1, btnText2, check, heroimg, review, checklistText1, checklistText2, mainBg, padding, transform, textColor, textWidth, id}) {

    return (
        <>
          <div className='hero-container' id={id} style={{background: `var(${mainBg})`}}>
              <div className='hero-content' style={{background: `var(${background})`, padding: `${padding}`, color: `${textColor}` }}>
                <div className='hero-text'>
                  <div className="review">
                    {review}{review}{review}{review}{review}
                    <p className="review-text">{reviewText}</p>
                  </div>
                  <h1 className='title-text'>{titleText}</h1>
                  <p className='desc-text' style={{maxWidth: `${textWidth}`}}>{descText}</p>
                  <div className="button">
                    <Button className={btnClasss1} text={btnText1} link='' />
                    <Button className={btnClass2} text={btnText2} link='' />
                  </div>
                  <div className="checkList">
                    <p className='cp1 checkpoints'>{check} {checklistText1}</p>
                    <p className='cp2 checkpoints'>{check} {checklistText2}</p>
                  </div>
                </div>
                <div className='hero-img' style={{transform: `${transform}`}}>
                  {heroimg}
                </div>
              </div>
          </div>  
        </>
    )
}

export default Hero
