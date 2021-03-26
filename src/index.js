import React from 'react';
import ReactDOM from 'react-dom';   

import './index.css'; 
import SearchMovies from './components/SearchMovies';
 
class App extends React.Component { 

  render(){
   
    return(
<div className="container">
  <h2 className="title">React MovieHaus</h2>
  <SearchMovies  />
</div>
    );
  }
}

ReactDOM.render(<App/>,  document.getElementById('root'));
 