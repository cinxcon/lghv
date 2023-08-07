import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const DynamicStyle = () => {
  useEffect(() => {
    if (!isMobile) {
      import('./styles/common.css');
      import('./styles/dashboard.css');
      import('./styles/servicetask.css');
    } else {
      // mobile인 경우
    }
  }, []);
};

export default DynamicStyle;
