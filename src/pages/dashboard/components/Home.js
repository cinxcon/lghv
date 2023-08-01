import React, { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    const removeActiveClass = () => {
      const menuItem = document.querySelector('.menu-item-level-1.active');
      if (menuItem) {
        menuItem.classList.remove('active');
      }
    };
    // 컴포넌트가 마운트(렌더링) 된 후에 active 클래스 제거 로직 실행
    removeActiveClass();
    // 언마운트(컴포넌트가 사라질 때) 시에도 active 클래스 제거 로직 실행
    return () => removeActiveClass();
  }, []);
  return <h1>Home Page</h1>;
};

export default Home
