import React from 'react'
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";


const landingPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <SectionTitle
        pretitle="About"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
    </SectionTitle>
    </>
    
  )
}

export default landingPage
