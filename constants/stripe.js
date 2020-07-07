const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_isDXP591iL1OVb7ZqqfJoYSy00ODZSz9IF';

export default STRIPE_PUBLISHABLE;