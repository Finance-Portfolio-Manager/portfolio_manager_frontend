import './css/portfolio-styles.css'
// import './App.css';
import { useEffect } from 'react';
import Main from './components/MainComponent';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sass/site.scss';

export default function App() {
  useEffect(() =>{
    async function importBootstrap(){
      await import ('@popperjs/core');
      await import ('bootstrap/dist/js/bootstrap.min');
    }
    importBootstrap();
   
  }, []);

  return (
         <Main/>
        // <MainAlt/>
    );
}
