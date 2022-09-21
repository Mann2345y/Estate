import React, { useState } from "react";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import FavMenu from "./FavMenu";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  position: sticky;
  top: 0;
  padding: 0 5%;
  margin-bottom: 50px;
  z-index: 10;
`;
const InnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
`;
const IconWrapper = styled.div`
  height: 50px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7065f1;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  h4 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
`;
const LogoWrapper = styled.div`
  height: 100%;
  width: 250px;
  display: flex;
  align-items: center;
`;
const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <LogoWrapper>
            <HiHome size={35} style={{ marginRight: "15px" }} color="#7065f1" />
            <h2>Estates</h2>
          </LogoWrapper>
          <IconWrapper onClick={() => navigate("/fav")}>
            <h4>Favourites</h4>
          </IconWrapper>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Nav;
