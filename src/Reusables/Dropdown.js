import React, { useState } from "react";
import styled from "styled-components";
import { MdExpandLess } from "react-icons/md";

const DropdownWrapper = styled.div`
  height: 40px;
  width: 100%;
  background: white;
  position: relative;
  margin-top: 5px;
`;
const DropdownHeader = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const DropdownContent = styled.div`
  height: 180px;
  width: 100%;
  position: absolute;
  top: 65px;
  z-index: 5;
  border-radius: 10px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.2s ease-in;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform-origin: top;
  transform: ${(props) => (props.open ? "scaleY(1)" : "scaleY(0)")};
  h4 {
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      color: #7065f1;
    }
  }
`;
const ArrowIcon = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebe6ff;
  border-radius: 50%;
  margin-left: 20px;
`;
const Dropdown = ({ state, changeHandler, values }) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownWrapper>
      <DropdownHeader
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h4>{state === "" ? "Nothing Selected" : state}</h4>
        <ArrowIcon>
          <MdExpandLess color="#7065f1" />
        </ArrowIcon>
      </DropdownHeader>
      <DropdownContent open={open} length={values.length}>
        {values.map((item, index) => (
          <h4
            key={index}
            onClick={() => {
              changeHandler(item);
              setOpen(false);
            }}
          >
            {item}
          </h4>
        ))}
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default Dropdown;
