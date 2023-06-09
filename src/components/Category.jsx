import React from 'react'
import {FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Category = () => {
  return (
    <List>
        <Slink to={'/cuisine/Italian'} >
            <FaPizzaSlice/>
            <h2>Italian</h2>
        </Slink>

        <Slink to={'/cuisine/American'}>
            <FaHamburger/>
            <h2>American</h2>
        </Slink>

        <Slink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h2>Thai</h2>
        </Slink>

        <Slink  to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h2>Japanese</h2>
        </Slink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin:2rem 0rem;
    
`;
const Slink = styled(NavLink)`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-radius:50%;
text-decoration:none;
margin-right:2rem;
color:black;
background:linear-gradient(35deg, #494949, #313131);
width:6rem;
height:6rem;
cursor:pointer;
transform:scale(0.8);

 h2{
    color:white;
    font-size:0.8rem;
 }
 svg{
    color:white;
    font-size:1.5rem;
 }
    &:active{
        background:linear-gradient(to right , #f27121, #e94057);
        svg{
            color:white;
        }
        h2{
            color:white;
        }
    }
`

export default Category