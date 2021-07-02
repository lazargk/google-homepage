import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav = styled.nav``;
const LeftLinks = styled.div``;
const RightLinks = styled.div``;
const NavLinks = styled(Link)``;

const Navbar = () => {
  return (
    <Nav>
      <LeftLinks>
        <NavLinks to="/about">About</NavLinks>
        <NavLinks to="/store">Store</NavLinks>
      </LeftLinks>
      <RightLinks>
        <NavLinks to="/gmail">Gmail</NavLinks>
        <NavLinks to="/images">Images</NavLinks>
        <NavLinks>
            <img src="../img/dots-menu.svg" alt="logo-menu"/>
        </NavLinks>
      </RightLinks>
    </Nav>
  );
};

export default Navbar;
