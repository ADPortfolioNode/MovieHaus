import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import SearchMovies from './components/SearchMovies';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className=".App-logo">
            </div><br/> title<br/> date, 
        </div>
        <div >
          <h1 className="title"> Hello ! 
          <br /> Movie search </h1>
        <span><SearchMovies /> </span>
      </div>
    </div >
  );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
