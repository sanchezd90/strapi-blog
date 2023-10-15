import { Router } from "./Router/Router.jsx";
import {Header} from './Components/Header/Header.jsx'
import {Footer} from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main className="main">
        <Router />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
