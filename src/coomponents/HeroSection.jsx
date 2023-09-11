import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
const HeroSection = () => {
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-12'>


    {/* Hero Section Starts */}
    <div className='row'>
    <div className='col-md-7'>
    <h1 className='hero-head' >YOUR FEET DESERVE THE BEST</h1>
    <p className='hero-para'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
    <Button style={{background:"#D01C28",border:'1px solid #D01C28',fontSize:"14px",borderRadius:"0px"}} type='submit'>Shop Now</Button>
    <Button className='cat-btn' style={{background:"transparent", border:'1px solid black',fontSize:"14px",borderRadius:"0px", color:'black'}} type='submit'>Category</Button>
    <br />
    <br />
    <p>Also Available On</p>
    <Image src='./amazon.png' />
    <Image className='flip-btn' src='./flipkart.png' />
    </div>

    <div className='col-md-5'>
    <Image src='./shoe_image.png' className='img-row' />
    </div>

    </div>


    </div>
    </div>
    </div>
  )
}

export default HeroSection