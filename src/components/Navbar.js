import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Profile from "../images/profile-photo.jpg";
import DotsMenu from "../images/dots-menu.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 14px;
`;

const LeftLinks = styled.div`
  padding: 10px;
  margin-left: 10px;
`;

const RightLinks = styled.div`
  padding: 10px;
  margin-right: 16px;
  display: flex;
  align-items: center;

  div > img {
    border-radius: 100%;
  }
`;

const NavLinks = styled(Link)`
  padding: 0 8px;
  text-decoration: none;
  color: #000;

  img {
    height: 24px;
    width: 24px;
    padding-right: 20px;
  }
`;

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
        <NavLinks to="/">
          <img src={DotsMenu} alt="DotsMenu" />

          
        </NavLinks>
        <Link to="/">
          <div>
            <img src={Profile} alt="Profile" />
          </div>
        </Link>
      </RightLinks>
    </Nav>
  );
};

export default Navbar;
