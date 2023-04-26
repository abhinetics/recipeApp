import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import './Search.css'
const Search = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const submitHandler = (e)=>{
        e.preventDefault()
        navigate(`/searched/${input}`)
    }
    
  return (
    <FormStyle  onSubmit={submitHandler} >
        <div className='main' >
        <FaSearch className='icon' />
        <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Search"/>
        </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
//  margin :0rem 20rem;
    
 
    div{
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0rem 0rem;
    }
 input{
    border: none;
    background:linear-gradient(35deg, #494949, #313131);
    font-size:1.5rem;
    color:white;
    padding: 1rem 3rem;
    border:none;
    border-radius: 1rem;
    outline:none;
    width:100%
 }
 svg{
    position: absolute;
    // top: 50%;
    // left: 0%;
    // transform: translate(100%);
    color:white;
 }
`

export default Search