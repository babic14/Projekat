import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Calculator from './components/Calculator';


// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <Routes>
          <Route path="/math-magicians/" element={<Calculator />} />
          
        </Routes>
      </div>
    );
  }
}

export default App;
