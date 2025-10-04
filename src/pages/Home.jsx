import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://static.wixstatic.com/media/de07cf_f25bf0a653b14c6bb0558714fb29b7c4~mv2.jpg/v1/crop/x_0,y_0,w_1832,h_605/fill/w_392,h_122,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/purple_wht_all.jpg' className="App-logo" alt="logo" />

        <Link to="/register" className="App-link">
          New Patient Registration
        </Link>
        <Link to="/patient-visit" className="App-link">
          Existing Patient Visit
        </Link>
      </header>
    </div>
  );
}

export default Home;
