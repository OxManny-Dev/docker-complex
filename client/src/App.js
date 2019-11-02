import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to='/'>Home</Link>
          <Link to='/otherpage'>OtherPage</Link>
        </header>

        <Route exact path='/' component={Fib}/>
        <Route exact path='/otherpage' component={OtherPage}/>
      </div>
    </Router>
  );
}

export default App;
