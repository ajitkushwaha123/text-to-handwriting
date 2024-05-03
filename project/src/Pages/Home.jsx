import React from 'react'
import Nav from '../components/Nav'
import Sheet from '../components/Sheet'
import Remark from '../components/Remark'

const Home = () => {
  return (
    <div>
       <Nav />
       <div className='md:px-[100px] md:py-[50px] sm:px-[40px] py-[40px] px-[20px]'>
         <Sheet />
       </div>

       <Remark />
    </div>
  )
}

export default Home
