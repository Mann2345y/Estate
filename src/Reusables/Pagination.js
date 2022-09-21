import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
`;
const NumbersBlock = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#7065f1" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  margin: 0 25px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Pagination = ({ currentpage, setCurrentpage }) => {
  const pageNumbers = [1, 2];

  return (
    <Wrapper>
      {pageNumbers.map((item, index) => (
        <NumbersBlock
          key={index}
          onClick={() => {
            setCurrentpage(item);
          }}
          active={currentpage === item}
        >
          <h6>{item}</h6>
        </NumbersBlock>
      ))}
    </Wrapper>
  );
};

export default Pagination;
