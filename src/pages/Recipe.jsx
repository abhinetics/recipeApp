import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import './Recipe.css'
const Recipe = () => {
    let params = useParams()
    const [recipe, setRecipe] = useState([])
    const [activeTab, setActiveTab] = useState('Instructions')
    const getRecipe = async()=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const recipes = await data.json()
        setRecipe(recipes) 
        console.log(recipes )
    }
    useEffect(()=>{
        getRecipe()
    },[params.name])

  return (
    <DetailedWrapper>   
        <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt="" />
        </div>
        <Info>
            <Button className={activeTab==='Instructions'? 'active': '' } onClick={()=>setActiveTab('Instructions')}>Instructions</Button>
            <Button className={activeTab==='Ingredients'? 'active': ''} onClick={()=>setActiveTab('Ingredients')}>Ingredients</Button>
            {activeTab==='Instructions' && (
                     <div className='txtmain' >
                     <h2 className='txt' dangerouslySetInnerHTML={{__html:recipe.summary}} ></h2>
                     <h2 className='txt2' dangerouslySetInnerHTML={{__html:recipe.instructions}} ></h2>
                     </div>
            ) }
            {activeTab==='Ingredients' && (
                 <ul className='ing'  >
                 {recipe.extendedIngredients && recipe.extendedIngredients.map((item)=>{
                     return(
                         <li key={item.id}>{item.original}</li>
                     )
                 }
                 )}
             </ul>
            )}
           
           
        </Info>
    </DetailedWrapper>
  )
}

const DetailedWrapper = styled.div`
    // margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949,#313131);
        color:white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem; 
    }
`;
const Button = styled.button`
padding: 1rem 2rem;
color:#313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`;
const Info = styled.div`
    margin-left: 10rem;
   
`;

export default Recipe