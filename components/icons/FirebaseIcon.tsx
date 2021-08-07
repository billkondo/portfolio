import dynamic from 'next/dynamic';

// Doing dynamic import for this icon because there is a warning
// complaining about an error during server side rendering
const FirebaseIconNoSSR = dynamic(() => import('./_FirebaseIcon'), {
  ssr: false,
});

export default FirebaseIconNoSSR;
