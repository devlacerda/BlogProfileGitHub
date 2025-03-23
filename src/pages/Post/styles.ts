import styled from "styled-components";

export const PostContainer = styled.main`
  max-width: 864px;
  margin: 3rem auto;
  padding: 2.5rem;
  background: #112131;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: #ffff;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const PostHeader = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    color: #ffff;
  }

  p {
    font-size: 0.875rem;
    color: #ffff;
    margin-top: 0.25rem;
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    font-size: 0.875rem;
    color: #ffff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  hr {
    margin-top: 1.5rem;
    border: none;
    height: 1px;
    background-color: #ffff;
  }
`;

export const PostContent = styled.section`
  line-height: 1.8;
  font-size: 1.1rem;
  color: #ffff;
  white-space: pre-wrap;
`;