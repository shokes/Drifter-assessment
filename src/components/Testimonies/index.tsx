// testimony component
import testimoniesData from '../../data/testimoniesData';
import styled, { keyframes } from 'styled-components';
import { Outer, Content } from './index.styles';
import { devices } from '../../devices';

const Testimonies = () => {
  return (
    <section>
      <div className='wrapper'>
        <Outer className='outer'>
          {testimoniesData.map((item) => {
            const { name, quote, image, position, company, id } = item;
            return (
              <Wrapper key={id} className='card rounded-lg '>
                {' '}
                <Content>
                  <img
                    src={image}
                    alt={name}
                    className='h-full  rounded-l-lg'
                  />
                  <div className='flex flex-col text-xs  md:text-sm py-14 px-3 '>
                    <blockquote className='mb-1'>"{quote}"</blockquote>

                    <div className=' text-contentColor'>
                      <span className='font-semibold whitespace-nowrap '>
                        {name},
                      </span>

                      <span className='whitespace-nowrap'> {position},</span>
                      <span> {company}</span>
                    </div>
                  </div>
                </Content>
              </Wrapper>
            );
          })}
        </Outer>
      </div>
    </section>
  );
};

export default Testimonies;

const animate = keyframes`
 0% {
    opacity: 0;
    transform: translateY(100%) scale(0.5);
  }
  5%,
  20% {
    opacity: 0.4;
    transform: translateY(100%) scale(0.7);
  }
  25%,
  40% {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0%) scale(1);
  }
  45%,
  60% {
    opacity: 0.4;
    transform: translateY(-100%) scale(0.7);
  }
  65%,
  100% {
    opacity: 0;
    transform: translateY(-100%) scale(0.5);
  }
`;
const Wrapper = styled.div`
  background: #fff;
  max-width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  opacity: 0;
  pointer-events: none;
  position: absolute;

  justify-content: space-between;

  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  animation: ${animate} 15s linear infinite;

  @media ${devices.small} {
    flex-direction: row;
    right: 0;
    max-width: 50%;
  }
`;
