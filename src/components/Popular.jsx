import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components' 
import {Link } from 'react-router-dom'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
const Popular = () => {
  const [popular, setPopular] = useState([])
  const [error, setError] = useState('')
  //function
  const getPopular = async () => {
      const check = localStorage.getItem('popular')
      if(check){
        setPopular(JSON.parse(check))
      }
      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`)
        const data = await api.json()
        console.log(data.recipes)
        setPopular(data.recipes)
        localStorage.setItem('popular', JSON.stringify(data.recipes))
      }

  }
  useEffect(() => {
    getPopular()
  }, [])
  return (
    <div>
      <Wrapper>
        <h1>Popular Recipes</h1>
        <Splide options={
          {
            perPage: 4,
            // arrows: false,
            // pagination: false,
            // drag: "free",
            // gap: "5rem",
          }
        } >
        {popular.map((item)=>{
          return(
            <SplideSlide key={item.id} >
            <Card>
              <Link to={`/recipe/${item.id}`}>
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title}/>
              {/* <p>{item.summary  }</p> */}
              {/* <Gradient/> */}
              </Link>
            </Card>
            </SplideSlide>
          )
        })}
        </Splide>

      </Wrapper>
        

   
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  h1{
    display: flex;
    align-items: flex-start;

  }
`
const Card = styled.div`
  min-height: 3rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img{
    border-radius: 2rem;
    positon: relative; 
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h2{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: white;
    background: rgba(0,0,0,0.5);
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
// const Gradient = styled.div`
// z-index: 3;
// position: absolute;
// width: 100%;
// height: 100%;
// background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
// `


export default Popular