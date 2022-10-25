import { featureDataType } from '../interfaces/featuresDataTypes';
import trusted from '../images/icons/trusted.png';
import access from '../images/icons/access.png';
import grow from '../images/icons/grow.png';

// data for the feature component

const featuresData: featureDataType[] = [
  {
    id: 1,
    heading: 'Trusted by founders and investors',
    content:
      'Join thousands of founders from more than 140 countries who have formed their companies using Stripe Atlas, with a best-in-class legal structure that’s built for scale. Stripe Atlas companies have raised more than $2 billion in funding.',
    icon: trusted,
  },
  {
    id: 2,
    heading: 'Access Stripe’s financial tools',
    content:
      'Use your Stripe account to access powerful and flexible tools for internet commerce. Stripe’s meticulously designed APIs and unmatched functionality help you create the best possible product for your users.',
    icon: access,
  },

  {
    id: 3,
    heading: 'Grow and scale with free credits',
    content:
      'Every dollar matters when you start your company. Sign up for discounts from our partners, including Amazon Web Services, legal and accounting firms, and more.',
    icon: grow,
  },
];

export default featuresData;
