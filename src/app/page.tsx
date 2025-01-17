import React from 'react'
import Hero from "./components/Hero"
import About from './components/About'
import Category from './components/Category'
import Section from './components/Section'
import Blog from './components/Blog'
import Chef from './components/Chef'
import Menu from './components/Menu'


function page() {
  return (
    <div className='bg-black'>
    <Hero></Hero>
    <About/>
    <Category/>
    <Section/>
    <Menu/>
    <Chef/>
    <Blog/>
  
    </div>
  )
}

export default page
