import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const IssuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`;

export const IssueCard = styled.div`
  background-color: ${(props) => props.theme["blue-600"]};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h2 {
      width: 80%;
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme["gray-100"]};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-400"]};
    }
  }

  p {
    color: ${(props) => props.theme["gray-300"]};
  }
`;