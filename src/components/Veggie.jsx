import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';

function Veggie() {

  const [veggie, setVeggie] = useState([]);

  //RUN GETveggie WHEN REFRESH
  useEffect(() => {
    getVeggie();
  },[]);

  //GETTING JSON DATA RANDOMLY FROM API
  const getVeggie = async () => {
    
    const check = localStorage.getItem('veggie'); // CHECK IF THERE ARE ANY IN LOCAL STORAGE

    if(check){ //PARA HINDI MAGREFRESH YUNG DATA SA WEBSITE, PARA MAGAMIT PA API
      setVeggie(JSON.parse(check)); 
    } else { //FETCH API

      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes)); //TAKING THE ARRAY, CONVERTING TO STRING AND SAVING IT
      
      //SETTING DATA TO veggie
      setVeggie(data.recipes);
    }

  }

  return (
    <div>
      {/* GETTING ALL THE RECIPE */}
          <Wrapper>
            <h3>Our Vegetarian Picks</h3>
              <Splide options={{
                perPage:3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem'
              }}>
              {veggie.map((recipe) => { 
                return (
                  <SplideSlide key={recipe.id}>
                    <Card>
                    <Link to={'/recipe/'+recipe.id}> {/* REDIRECT TO RECIPE PAGE */}
                      <p>{recipe.title}</p> {/* OUTPUT EVERY TITLE OF RECIPE */}
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                      </Link>
                    </Card>
                  </SplideSlide>
                )
              })};
              </Splide>
          </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 1005:
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`


export default Veggie