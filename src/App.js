import './App.css';
import { BrowserRouter} from "react-router-dom";
import { useEffect } from 'react';
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
    );
}

