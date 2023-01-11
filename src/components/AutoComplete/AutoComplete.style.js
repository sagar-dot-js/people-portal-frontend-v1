import styled from "styled-components";

export const Box = styled.div`
  ul {
    margin-top: 3px;
    width: 100%;
    background-color: aliceblue;
    background: #ffffff;
    border: 1px solid #333333;
    border-radius: 4px;
    position: absolute;
    z-index: 1000;

    li {
      list-style-type: none;
      padding: 10px;
      cursor: pointer;
      font-size: 12px;
    }

    li:hover {
      background-color: aliceblue;
    }
  }
`;
