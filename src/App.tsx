import Home from './components/Home';
import { Container, SolidLine, Dotted } from './App.styles';

function App() {
  return (
    <Container>
      <head>
        <title>
          Stripe Atlas | Incorporate your startup in Delaware: C corp or LLC
        </title>
      </head>

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
