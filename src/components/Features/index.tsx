// feature component
import featuresData from '../../data/featuresData';
import { Wrapper, Content } from './index.styles';
import { HiOutlineMinus } from 'react-icons/hi';

const Features = () => {
  return (
    <Wrapper>
      {featuresData.map((item) => {
        // destructuring to get the properties in item.

        const { id, heading, content, icon } = item;

        return (
          <Content key={id}>
            <header>
              <img src={icon} alt={heading} className='mb-4' />

              <h2 className=' relative font-semibold  mb-2 '>
                {' '}
                {heading}
                <span>
                  {' '}
                  <HiOutlineMinus className='text-xl  rotate-90 text-[#ff7600] z-20 -left-[26.9px] top-[2px] absolute' />{' '}
                </span>
              </h2>
            </header>

            <p className='font-normal'>{content}</p>
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default Features;
