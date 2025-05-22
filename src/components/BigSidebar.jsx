import React from 'react';
 import styled from 'styled-components';
 const BigSidebar = () => {
  return (
    <Wrapper>
      <h1>Big Sidebar</h1>
    </Wrapper>
  );
 };
 const Wrapper = styled.aside`
  background-color: #f0f0f0;
  width: 20rem;
  padding: 2rem;
 `;
 export default BigSidebar;