import React from 'react';


import Carousel from 'react-bootstrap/Carousel'
function Header() {
  return (
    
      <Carousel style={{width: 1440, height: 550}}>
          <Carousel.Item>
            <img
            style={{height: 500}}
            className="d-block w-100"
            src="https://www.aspca.org/sites/default/files/apcc_people-foods-to-avoid_main-image.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Puppy Recipe</h3>
            <p>Its the best way to create and customize your favorite dish.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style={{height: 500}}
            className="d-block w-100"
            src="https://www.foreverlawn.com/wp-content/uploads/2018/05/Corgis-04.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Puppy Recipe</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{height: 500}}
            className="d-block w-100"
            src="https://i.imgur.com/5yq0G.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Puppy Recipe</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{height: 500}}
            className="d-block w-100"
            src="https://d1axrjtp4ik438.cloudfront.net/question_photo_editorial_thumb/uploads/questions/35163/images/1544888291-dog-food.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Puppy Recipe</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default Header;
