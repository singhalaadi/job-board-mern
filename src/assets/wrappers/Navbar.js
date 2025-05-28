import styled from 'styled-components';
const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  flex-direction: row;
  /* .logo {
    display: flex;
    align-items: center;
    width: 100px;
  } */

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .nav-center {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  .logo-text {
    display: none;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    /* .logo {
      display: none;
    } */
    .logo-text {
      display: block;
    }
  }
 `;
export default Wrapper;