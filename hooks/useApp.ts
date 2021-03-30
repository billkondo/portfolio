import { useEffect } from 'react';

import { initFirebase } from 'services/firebase';

const useApp = () => {
  useEffect(() => {
    initFirebase();
  }, []);
};

export default useApp;
