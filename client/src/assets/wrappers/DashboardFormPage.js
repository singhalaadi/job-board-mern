import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  .form-title {
    margin-bottom: 2rem;
    color: var(--text-color);
  }

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
    background: var(--background-secondary-color); /* Use variable for form bg */
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /* Dark theme overrides */
  body.dark-theme & {
    background: var(--dark-mode-bg-secondary-color, #23272f);
    color: var(--dark-mode-text-color, #f4f4f4);
    .form-title {
      color: var(--dark-mode-text-color, #f4f4f4);
    }
    .form {
      background: var(--dark-mode-bg-secondary-color, #23272f);
    }
    input, select, textarea {
      background: #181a20;
      color: #f4f4f4;
      border-color: #444;
    }
    .form-btn {
      background: #2b7a78;
      color: #f4f4f4;
    }
  }
`;

export default Wrapper;