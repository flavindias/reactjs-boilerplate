import React from "react";
import styled from "styled-components";
import { useRouteError } from "react-router-dom";
type ErrorPageProps = {
    statusText: string; 
    message: string 
};

const ErrorPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ErrorPage = () => {
  const error: ErrorPageProps = useRouteError() as ErrorPageProps;
  console.error(error);

  return (
    <ErrorPageContainer>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorPageContainer>
  );
}