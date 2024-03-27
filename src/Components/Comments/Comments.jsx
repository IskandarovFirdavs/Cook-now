import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TextArea = styled("textarea")`
  width: 100%;
  margin-top: 20px;
  height: 70px;
  background: none;
  font-weight: 600;
  font-size: 15px;
  color: #73c000;
  border: 0px solid green;
`;
const TextAreaDiv = styled("div")`
  display: flex;
  justify-content: space-around;
  border: 3px solid green;
  width: 90%;
  border-radius: 20px;
  flex-direction: column;
  height: 120px;
`;

const ImgPlace = styled("div")`
  display: flex;
  width: 100%;
`;
const Submit = styled("button")`
  width: 10%;
  background-color: greenyellow;
  color: green;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 100%;
  border: none;
  cursor: pointer;
  &:hover {
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 80px;
    transition: all 0.2s ease-in;
  }
`;

const CommentDiv = styled("form")`
  height: 700px;
  background: linear-gradient(#d1d1d1, #e3e3e3, white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IconPerson = styled("img")`
  height: 50px;
  align-items: start;
  border-radius: 30%;
`;

const Names = styled("text")`
  font-weight: 700;
  font-size: 20px;
  margin-left: 20px;
  color: green;
`;
const Opp = styled("text")`
  font-weight: 600;
  font-size: 15px;
  color: #73c000;
`;

const Comments = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Opinion submitted:", comment);
  };

  return (
    <div>
      <CommentDiv onSubmit={handleSubmit}>
        <label htmlFor="comment">
          <h1 style={{ color: "green", fontSize: "45px" }}>Opinions:</h1>
        </label>
        <div>
          <IconPerson
            src="https://storage.googleapis.com/pai-images/444197577b464c649600af60d904a664.jpeg"
            alt=""
          />
          <TextAreaDiv>
            <Names>Martin Twillo</Names>
            <Opp>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              et laudantium, iure modi voluptatem corrupti ad consectetur ut
              reiciendis maxime enim aliquid velit alias id, sapiente laborum,
              nesciunt ipsum dolorem!
            </Opp>
          </TextAreaDiv>
        </div>
        <div>
          <IconPerson
            src="https://media.istockphoto.com/id/1134001966/photo/happy-young-woman-smiling.webp?b=1&s=170667a&w=0&k=20&c=xwAAi1polf7qGlhGM529fNU6VxRD92K5bRk-I-Z9T0Q="
            alt=""
          />
          <TextAreaDiv>
            <Names>Julia Athona</Names>
            <Opp>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              et laudantium, iure modi voluptatem corrupti ad consectetur ut
              reiciendis maxime enim aliquid velit alias id, sapiente laborum,
              et laudantium, iure modi voluptatem corrupti ad consectetur ut
              reiciendis maxime enim aliquid velit alias id, sapiente laborum,
              nesciunt ipsum dolorem!
            </Opp>
          </TextAreaDiv>
        </div>

        <ImgPlace>
          <IconPerson
            src="https://cdn1.iconfinder.com/data/icons/mobile-app-interface/512/Friend_Profile_User_Account_UI-512.png"
            alt=""
          />
          <TextAreaDiv>
            <Names>You</Names>
            <TextArea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write your own opinion about our web-site:"
              maxLength={700}
            />
            <Submit type="submit">
              <h3>Submit</h3>
            </Submit>
          </TextAreaDiv>
        </ImgPlace>
      </CommentDiv>
    </div>
  );
};

export default Comments;
