import React from 'react'
import Feedback from './Feedback'
import './Community.css'
import user1 from '../assets/User Avatar.svg'
import user2 from '../assets/User Avatar 2.svg'
import user3 from '../assets/User Avatar 32.svg'

function Community() {
  const userA = <img src={user1} alt='user' className='userImg' />
  const userB = <img src={user2} alt='user' className='userImg' />
  const userC = <img src={user3} alt='user' className='userImg' />

  return (
    <div className='community-container' id='community'>
      <div className='community-content'>
        <div className='testimonial-title'>
          <h1 className='gradient-title'>Our Client's Love What We Do</h1>
          <p>Bringing value to different brands and people</p>
        </div>
        <Feedback
          userImg={userA}
          userName='Sarah Andrews'
          revenue='$100k in revenue'
          fText='Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.'
          btnText="View Sarah's Portfolio"
          className=''
        />

        <Feedback
          userImg={userB}
          userName='Matthew Higgins'
          revenue='$80k in revenue'
          fText="I have been getting a LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studeies and I'll be ready to go!"
          btnText="View Matthew's Portfolio"
          className=''
        />

        <Feedback
          userImg={userC}
          userName='Janice Dave'
          revenue='$110k in revenue'
          fText='I only started freelancing this year and I have already made more than I ever made in my full-time job. The premade templates are just so amazing.'
          btnText="View Janice's Portfolio"
          className='third'
        />
      </div>
    </div>
  )
}

export default Community
