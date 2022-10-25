import Home from './components/Home';
import styled from 'styled-components';


function App() {
  return (
    <Container>
      <SolidLine className='  absolute right-0  '></SolidLine>
      <SolidLine className=' absolute left-0 '></SolidLine>
      <Dotted className='  absolute left-1/2 '></Dotted>
      <Dotted className=' absolute left-3/4  '></Dotted>
      <Dotted className=' absolute left-1/4 '></Dotted>
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto 0 auto;
  position: relative;
`;

const SolidLine = styled.div`
  border: none;
  border-right: 1px solid #e9ecef;
  height: 100%;
  width: 2px;
`;

const Dotted = styled.div`
  border: none;
  border-right: 1px dashed #e9ecef;
  height: 100%;
  width: 2px;
`;
