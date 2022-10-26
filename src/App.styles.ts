import styled from 'styled-components';
import { devices } from './devices';

const Container = styled.div`
  max-width: 97%;
  font-family: 'Roboto', sans-serif;
  padding: 0;
  color: #343a40;
  box-sizing: border-box;
  margin: 0 auto 0 auto;
  position: relative;

  @media ${devices.small} {
    max-width: 1080px;
  }
`;

const SolidLine = styled.div`
  border: none;
  border-right: 1px solid #e9ecef;
  height: 120%;
  width: 2px;

  @media ${devices.small} {
    height: 100%;
  }
`;

const Dotted = styled.div`
  border: none;
  border-right: 1px dashed #e9ecef;
  height: 120%;
  width: 2px;

  @media ${devices.small} {
    height: 100%;
  }
`;

export { Container, SolidLine, Dotted };
