import React from 'react'
import { Card, Image } from 'react-bootstrap'

export default function Header() {
   return (
      <Card style={{maxHeight: '400px', overflow: 'hidden'}}  className=" bg-dark text-white ">
      <Image src="https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage79040049-30-vb1561781-Restaurant-Gordon-Ramsay-017-AS-1-.jpg" alt="Card image" fluid />
      <Card.ImgOverlay className="p-sm-1 p-md-3 p-lg-4 p-xl-5 text-center">
        <Card.Title style={{fontSize: '35px', color: '#DAA520', fontWeight: 'bold'}} >Find your favorite recipe</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
   )
}
