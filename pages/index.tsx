import React, { useState } from "react";
import styled from "styled-components";
import { NextPage } from "next";
import { connect } from "react-redux";

const Container = styled.div``;

interface IProps {
  toDos: any;
}

const index: NextPage<IProps> = ({ toDos }) => {
  console.log(toDos);
  const [toDoText, setToDoText] = useState("");
  const onChange = (e) => {
    setToDoText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(toDoText);
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

function getCurrentState(state) {
  return { toDos: state };
}

export default connect(index)(getCurrentState);
