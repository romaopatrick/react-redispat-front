import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header';
import Sidenav from './components/Sidenav/Sidenav';
import { SelectedKeyContext } from './contexts/SelectedValueContext/SelectedValueContext';
import { AppRouter } from './Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8'
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'

  return (
    <SelectedKeyContext>
      <section className='layout_area'>
        <Header />
        <BrowserRouter>

          <div className='sidenav_content_area'>
            <Sidenav />

            <div className='content_area'>
              <div className='content_area_inner'>
                <AppRouter />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </section>
    </SelectedKeyContext>
  );
}

export default App;
