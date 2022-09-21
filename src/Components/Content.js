import React, { useContext, useEffect, useState } from "react";
import { Data } from "../Context";
import Card from "../Reusables/Card";
import styled from "styled-components";
import Dropdown from "../Reusables/Dropdown";
import Pagination from "../Reusables/Pagination";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  padding: 0 5%;
`;
const InnerWrapper = styled.div`
  height: fit-content;
  width: 100%;
  padding: 0 50px;
`;
const Header = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
`;
const Input = styled.input`
  height: 50px;
  width: 250px;
  background: white;
  padding: 0 20px;
  color: #333333;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &::placeholder {
    color: #333333;
  }
  &:focus {
    outline: none;
  }
`;
const DateInput = styled.input`
  height: 40px;
  width: 200px;
  border-radius: 5px;
  margin-top: 5px;
  border: 1px solid #d3d3d3;
  font-family: "Poppins", sans-serif;
  padding: 10px;
  font-size: 0.8em;
  position: relative;
  transition: all 0.2s ease-in;
  &:focus {
    outline: none;
    box-shadow: #7065f1 0px 1px 10px;
  }
  &::-webkit-calendar-picker-indicator {
  }
`;
const FilterWrapper = styled.div`
  height: fit-content;
  width: 100%;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Filter = styled.div`
  height: 70px;
  min-width: 200px;
  > h4 {
    color: #888888;
  }
`;
const Seperator = styled.div`
  height: 50px;
  width: 2px;
  background: #d3d3d3;
`;
const Button = styled.div`
  height: 50px;
  width: calc(100% - 30px);
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7065f1;
  border-radius: 10px;
  color: white;
  h4 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
`;
const ButtonWrapper = styled(Filter)`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Content = () => {
  const { data, setData } = useContext(Data);
  const [dataArray, setDataArray] = useState(data);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setDataArray(data);
  }, []);

  useEffect(() => {
    let newDataArray = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].city.includes(location)) {
        newDataArray.push(data[i]);
      }
    }
    setDataArray(newDataArray);
  }, [location]);

  useEffect(() => {
    let newDataArray = [];
    for (let i = 0; i < data.length; i++) {
      if (price === "$1000-$2000") {
        if (data[i].price > 1000 && data[i].price < 2000) {
          newDataArray.push(data[i]);
        }
      }
      if (price === "$2000-$3000") {
        if (data[i].price > 2000 && data[i].price < 3000) {
          newDataArray.push(data[i]);
        }
      }
      if (price === "$3000-$4000") {
        if (data[i].price > 3000 && data[i].price < 4000) {
          newDataArray.push(data[i]);
        }
      }
      if (price === "$4000-$5000") {
        if (data[i].price > 4000 && data[i].price < 5000) {
          newDataArray.push(data[i]);
        }
      }
    }
    setDataArray(newDataArray);
  }, [price]);

  useEffect(() => {
    let newDataArray = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].type.includes(type)) {
        newDataArray.push(data[i]);
      }
    }
    setDataArray(newDataArray);
  }, [type]);

  useEffect(() => {
    const dateobject = new Date(date);
    let newDataArray = [];
    if (Object.keys(data).length > 0) {
      for (let i = 0; i < data.length; i++) {
        console.log(data[0].bookedFrom);
        if (
          new Date(data[i].bookedFrom).getDate() < dateobject.getDate() &&
          new Date(data[i].bookedTo).getDate() > dateobject.getDate()
        ) {
          continue;
        } else {
          newDataArray.push(data[i]);
        }
      }
    }
    setDataArray(newDataArray);
  }, [date]);

  useEffect(() => {
    const newDataArray = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.toLowerCase().includes(search)) {
        newDataArray.push(data[i]);
      }
    }
    if (newDataArray.length > 0) {
      setDataArray(newDataArray);
    } else {
      setDataArray(data);
    }
  }, [search]);

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
      <InnerWrapper>
        <Header>
          <h1>Search Properties</h1>
          <Input
            type="text"
            placeholder="search property by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Header>
        <FilterWrapper>
          <Filter>
            <h4>Location</h4>
            <Dropdown
              state={location}
              changeHandler={setLocation}
              values={["city one", "city two", "city three", "city four "]}
            />
          </Filter>
          <Seperator />
          <Filter>
            <h4>Price:</h4>
            <Dropdown
              state={price}
              changeHandler={setPrice}
              values={[
                "$1000-$2000",
                "$2000-$3000",
                "$3000-$4000",
                "$4000-$5000",
              ]}
            />
          </Filter>
          <Seperator />
          <Filter>
            <h4>Move in Date</h4>
            <DateInput
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </Filter>
          <Seperator />
          <Filter>
            <h4>Property Type:</h4>
            <Dropdown
              state={type}
              changeHandler={setType}
              values={["House", "Hotel", "Resort"]}
            />
          </Filter>
          <Seperator />
          <ButtonWrapper>
            <Button>
              <h5>Search</h5>
            </Button>
          </ButtonWrapper>
        </FilterWrapper>
        <CardWrapper>
          {dataArray.map((item, index) => (
            <Card key={index} content={item} favHandler={favHandler}></Card>
          ))}
        </CardWrapper>
        <Pagination />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Content;
