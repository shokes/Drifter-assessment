//styles for home component
import { devices } from '../../devices';
import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;

  @media ${devices.small} {
    flex-direction: row;
  }
`;
