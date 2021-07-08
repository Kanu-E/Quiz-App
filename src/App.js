import React from 'react';
import Accordion from './components/Accordion'

const items = [{title: 'What is React?' , content: 'React is a frontent javascript framework'},{title: "Why use React?", content :"React is a favourite JS library among engineers"}, {title:""}]


export default () => {
  return (
    <div className="App">
      <Accordion items = {items}/>
    </div>
  );
}


