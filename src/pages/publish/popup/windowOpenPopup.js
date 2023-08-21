/* eslint-disable */
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function WinOpen2() {
  // window.opener.parentCallback();
  // window.close();

  return (
    <div>
      <p>Parent Page</p>
      <p>Parent Page</p>
      <p>Parent Page</p>
      <p>Parent Page</p>
    </div>
  )
}

// function WinOpen() {
//   return createPortal(WinOpen2, document.body);
// }

export default WinOpen2;
