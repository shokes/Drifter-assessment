// styles for the feature component
import styled from 'styled-components';
import { devices } from '../../devices';

// a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  margin-bottom: 120px;
  padding-left: 18px;
  padding-right: 18px;

  @media ${devices.laptop} {
    margin-bottom: 0;
    max-width: 418px;
    padding-right: 0px;
  }

  @media ${devices.laptopL} {
    max-width: 490px;
  }
`;

// a Content component that'll render a <div> tag with some styles
export const Content = styled.div`
  margin-bottom: 64px;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.2px;
`;
