import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Community from '../components/Community'
import Footer from '../components/Footer'
import checkmark from '../Assets/Checkmark.svg'
import mainimg from '../Assets/hero-Illustration.png'
import star from '../Assets/star.svg'
import pageImage from '../Assets/Page Image.png'



function HomePage() {
  const review = <img src={star} alt='review' className='star' />
  const check = <img src={checkmark} alt='checkmark' className='checkmark' />
  const heroImg = <img src={mainimg} alt='hero-illustration' className='hero-illustration' />
  const pagedemo = <img src={pageImage} alt='Page' className='hero-illustration' />

    return (
        <div>
            <Header />

            <Hero 
            padding='4rem 0 3rem 0'
            mainBg='--bs-secondary'
            background= '--bs-secondary'
            review={review} 
            reviewText='Rated 4.6/5 (243 reviews)' 
            titleText='Create your portfolio in minutes.' 
            descText='With fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.' 
            btnClasss1='btn-primary btn1'
            btnClass2='btn-simple' 
            btnText1='Start Free Trial' 
            btnText2='View Example' 
            check={check} 
            checklistText1 = 'No Credit Card Required'
            checklistText2 = '10 free samples'
            heroimg={heroImg} />

            <Features />

            <Hero
            textColor='var(--bs-white)'
            classN='rev-col'
            mainBg='--bs-white'
            background='--bs-info'
            padding= '2rem 2rem 0 2rem'  
            titleText='Diversify your portfolio.' 
            descText='Create an even more impressive portfolio by creating case studies for your projects. Simply follow our step-by-syep guide.' 
            textWidth='35ch'
            btnClasss1='btn-secondary' 
            btnText1='Start Free Trial'  
            heroimg={pagedemo}
            transform= 'translateY(5px)' />

            <Community />

            <Footer />

        </div>
    )
}

export default HomePage
