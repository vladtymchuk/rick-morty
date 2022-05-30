import React, {FC} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: black;
`

const StyledLink = styled(NavLink)`
  width: 10%;
  height: 95%;
  margin: 5px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  background-color: #000000;
`


const Header: FC = () => {
    return (
        <HeaderContainer>
            {/*<NavLink></NavLink>*/}
            <StyledLink to={"/"}>Characters</StyledLink>
            <StyledLink to={"/episodes"}>Episodes</StyledLink>
            <StyledLink to={"/seeLater"}>See Later!</StyledLink>
        </HeaderContainer>
    );
};

export default Header;