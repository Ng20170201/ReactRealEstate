import React from 'react'
import styled,{css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import { menuData } from '../data/menuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa'


const Nav= styled.nav`
 height: 60px;
 display: flex;
 justify-content: space-between;
 padding: 1rem 2rem;
 z-index: 100;
 width: 100%;
 position: fixed;
 
`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration:none;
`


const Logo= styled(Link)`
    ${NavLink}
    font-style:italic;

`;
const MenuBars = styled(FaBars)`
display:none;

@media screen and (max-width: 768px){
display: block;
background-size: contain;
height: 40px;
width: 40px;
cursor: pointer;
position: absolute;
top: 0;
right: 0;
transform: translate(-50%,25%);
}
`;

const NavMenu = styled.div`
display: flex;

align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px){
    display:none;
}
`;

const NavMenuLinks=styled(Link)`
${NavLink}
`;

const NavBtn=styled.div`

display: flex;
align-items: center;
margin-right:24px;
`

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <Logo ro="/">Real Estate App</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title
                        
                        }
                    </NavMenuLinks>
        ))}
             <NavBtn>
            
                <Button to='/contact' primary='true' >Contact us</Button>
                 </NavBtn>
            </NavMenu>
         
            </Nav>
        </>
    )
}

export default Navbar