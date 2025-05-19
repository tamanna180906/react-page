
import React from 'react'
import Banner from "../components/banner/Banner"
import Work from "../components/work/Work"
import List from "../components/list/List"
import Features from "../components/features/Features"
import What from '../components/what/What'
import More from '../components/more/More'
import For from '../components/for/For'
import Blog from '../components/blog/Blog'



function Home() {
  return (
    <>
    <Banner/>
    <Work/>
    <List/>
    <Features/>
    <What/>
    <More/>
    <For/>
    <Blog/>
    </>
  )
}

export default Home