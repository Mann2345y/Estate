import React from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineHomeWork } from "react-icons/md";

const Entryanimation = keyframes`
  0% {transform: scale(0);}
  33% {transform: scale(1.2);}
  66% {transform: scale(0.8);}
  100% {transform: scale(1);}
`;
const Exitanimation = keyframes`
  0% {transform: scale(1);}
  33% {transform: scale(0.8);}
  66% {transform: scale(1.2);}
  100% {transform: scale(0);}
`;
const EmptyHeart = styled(AiOutlineHeart)`
  position: absolute;
  top: center;
  left: center;
  animation-name: ${(props) => (props.$fav ? Entryanimation : Exitanimation)};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  opacity: ${(props) => (props.$fav ? "1" : "0")};
`;
const FilledHeart = styled(AiFillHeart)`
  position: absolute;
  top: center;
  left: center;
  transition: all 0.2s ease-in;
  animation-name: ${(props) => (props.$fav ? Entryanimation : Exitanimation)};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  opacity: ${(props) => (props.$fav ? "1" : "0")};
`;

const Wrapper = styled.div`
  height: 400px;
  width: 300px;
  border-radius: 10px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Image = styled.div`
  height: 50%;
  width: 100%;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const Content = styled.div`
  height: 50%;
  width: 100%;
  padding: 25px;
  h5 {
    color: #999999;
    margin-top: 10px;
  }
`;
const ContentHeader = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  > div h2 {
    color: #6d66ed;
    display: inline;
  }
  > div p {
    color: #aaaaaa;
    display: inline;
    font-weight: 600;
  }
`;
const FavouriteIcon = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaaaaa;
  cursor: pointer;
  position: relative;
`;
const Seperator = styled.div`
  height: 2px;
  width: 100%;
  background: #eeeeee;
  margin-top: 10px;
`;
const CardFooter = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  > div {
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    > h5 {
      margin: 0;
      margin-left: 5px;
    }
  }
`;
const Card = ({ content, favHandler }) => {
  return (
    <Wrapper>
      <Image image={content.image} />
      <Content>
        <ContentHeader>
          <div>
            <h2>${content.price}</h2>
            <p>/month</p>
          </div>
          <FavouriteIcon onClick={() => favHandler(content.name)}>
            <EmptyHeart color="#6d66ed" size={21} $fav={!content.favourite} />
            <FilledHeart color="#6d66ed" size={21} $fav={content.favourite} />
          </FavouriteIcon>
        </ContentHeader>
        <h3>{content.name}</h3>
        <h5>{content.address} </h5>
        <Seperator />
        <CardFooter>
          <div>
            <ImLocation2 size={18} color="#6d66ed" />
            <h5>{content.city}</h5>
          </div>
          <div>
            <MdOutlineHomeWork size={18} color="#6d66ed" />
            <h5>{content.type}</h5>
          </div>
        </CardFooter>
      </Content>
    </Wrapper>
  );
};

export default Card;
