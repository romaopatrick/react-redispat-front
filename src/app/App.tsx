import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';

function App() {
  axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8'
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'

  return (
    <section className='layout_area'>
      <Header />
      <Sidenav />
    </section>
  );
}

export default App;
