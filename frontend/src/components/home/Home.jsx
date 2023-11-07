import React from 'react';
import { Form } from '../../components';

import './Home.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-inner">
        <div className="home">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Home;