import React from 'react';
import './Layout.css';

function Layout({ children, estilo }) {
  const layoutClassName = `${estilo}`;

  return (
    <div className={layoutClassName}>
      {children}
    </div>
  );
}

export default Layout;
