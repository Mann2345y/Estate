import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BsBackspace } from "react-icons/bs";
import Card from "../Reusables/Card";
import { Data } from "../Context";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  padding: 25px;
`;
const BackButton = styled.div`
  height: 50px;
  width: 100%;
  > div {
    height: 100%;
    width: 100px;
    background: #7065f1;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    padding: 0 10px;
    h5 {
      margin-left: 10px;
    }
  }
`;
const CardWrapper = styled.div`
  height: fit-content;
  margin: 50px 0;
  display: grid;
  grid-gap: 50px 10px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 430px;
  justify-items: center;
`;

const FavMenu = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(Data);
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    const newDataArray = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].favourite) {
        newDataArray.push(data[i]);
      }
    }
    setDataArray(newDataArray);
  }, [data]);

  const favHandler = (name) => {
    const newData = [...data];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i].name.includes(name)) {
        newData[i].favourite = !newData[i].favourite;
      }
    }
    setData(newData);
    localStorage.setItem("data", JSON.stringify(data));
  };
  return (
    <Wrapper>
      <BackButton>
        <div onClick={() => navigate("/")}>
          <BsBackspace size={28} />
          <h5>Back</h5>
        </div>
      </BackButton>
      <h1 style={{ margin: "25px 0" }}>Favourites </h1>
      <CardWrapper>
        {dataArray.map((item, index) => (
          <Card content={item} favHandler={favHandler} key={index}></Card>
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default FavMenu;
