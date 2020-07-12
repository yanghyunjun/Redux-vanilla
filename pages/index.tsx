import React, { useState } from "react";
import styled from "styled-components";
import { NextPage } from "next";
import { connect } from "react-redux";

const Container = styled.div``;

const index: NextPage = (props) => {
  console.log(props);
  const [toDoText, setToDoText] = useState("");
  const onChange = (e) => {
    setToDoText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(toDoText);
  };
  return (
    <Container>
      <h1>ToDos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write to do"
          value={toDoText}
          onChange={onChange}
        />
        <button>ADD</button>
      </form>
      <ul></ul>
    </Container>
  );
};

// const getCurrentState = (state) => {
//   return { state };
// };

export default index;
