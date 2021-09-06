import React from 'react';
// import Accordion from './components/Accordion'
import Search from './components/search'
// const items = [{title: 'What is React?' , content: 'React is a frontent javascript framework'},{title: "Why use React?", content :"React is a favourite JS library among engineers"}, {title:"bb", content: "jj"}]


const App = () => {
  return (
    <div className="App">
      {/* <Accordion items = {items}/> */}
      <Search/>
    </div>
  );
}

export default App;

