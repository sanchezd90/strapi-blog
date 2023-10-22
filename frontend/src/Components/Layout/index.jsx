import React from "react";
import {Header} from '../Header/Header.jsx'
import {Footer} from '../Footer/Footer.jsx'

export const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main className="main">   
        {children}     
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

