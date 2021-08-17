// import './App.css';
import { useEffect } from 'react';
import './css/portfolio-styles.css'
import Main from './components/MainComponent';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sass/site.scss';

export default function App() {
  useEffect(async() => {
    await import ('@popperjs/core');
    await import ('bootstrap/dist/js/bootstrap.min');
  }, []);

  return (
         <Main/>
        // <MainAlt/>
    );
}
