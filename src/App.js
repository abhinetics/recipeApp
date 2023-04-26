import './App.css';
import Home from './pages/Home';
import Category from './components/Category';
import Pages from './pages/Pages';
import Search from './components/Search';
import { BrowserRouter,Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
       <Nav  >
        <GiKnifeFork/>
        <Logo to={'/'}> Recipe App </Logo>
        </Nav>
      <Search/>
      <Category/>
      <Pages/>
    </BrowserRouter>
    </div>
  );
}


const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
`;

const Nav = styled.nav`
  padding: 2rem 0rem;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }

`;

export default App;
