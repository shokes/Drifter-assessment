// feature component
import featuresData from '../../data/featuresData';
import { Wrapper, Content } from './index.styles';

const Features = () => {
  return (
    <Wrapper>
      {featuresData.map((item) => {
        // destructuring to get the properties in item.

        const { id, heading, content, icon } = item;

        return (
          <Content key={id}>
            <header className='relative'>
              <img src={icon} alt={heading} className='mb-4' />
              <h2 className='font-semibold text-headingColor mb-2 '>
                {' '}
                {heading}{' '}
              </h2>
              <div className='text-[#ff7600] -left-[18px] top-[50px] h-[64px] absolute'>
                |
              </div>
            </header>

            <p className='text-contentColor font-normal'>{content}</p>
          </Content>
        );
      })}
    </Wrapper>
  );
};

export default Features;
