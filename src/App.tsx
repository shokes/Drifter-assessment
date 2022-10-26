import Home from './components/Home';
import styled from 'styled-components';
import { devices } from './devices';

function App() {
  return (
    <Container>
      <SolidLine className='  absolute right-0  '></SolidLine>

      <SolidLine className=' absolute left-0 '></SolidLine>
      <Dotted className=' hidden md:block absolute left-1/2 '></Dotted>
      <Dotted className=' hidden lg:block  absolute left-3/4  '></Dotted>
      <Dotted className=' hidden lg:block absolute left-1/4 '></Dotted>
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 97%;
  font-family: 'Roboto', sans-serif;
  padding: 0;

  box-sizing: border-box;
  margin: 0 auto 0 auto;
  position: relative;

  @media ${devices.laptop} {
    max-width: 1080px;
  }
`;

const SolidLine = styled.div`
  border: none;
  border-right: 1px solid #e9ecef;
  height: 120%;
  width: 2px;

  @media ${devices.laptop} {
    height: 100%;
  }
`;

const Dotted = styled.div`
  border: none;
  border-right: 1px dashed #e9ecef;
  height: 120%;
  width: 2px;

  @media ${devices.laptop} {
    height: 100%;
  }
`;
