import React, {useEffect} from 'react'
import Header from './components/Header';


import api from "./Api/api";
import Main from './components/Main';
import Collection from './components/Collection';

function App() {

 

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Collection/>
    </div>
  );
}

export default App;
