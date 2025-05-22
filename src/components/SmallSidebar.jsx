import React from "react";
import styled from "styled-components";
const SmallSidebar = () => {
  return (
    <Wrapper>
      <h1>Small Sidebar</h1>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  background-color: #e0e0e0;
  width: 5rem;
  padding: 1rem;
`;
export default SmallSidebar;
