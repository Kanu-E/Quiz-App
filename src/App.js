import React from 'react';
import Accordion from './components/Accordion'

const items = [{question: 'What is React?' , content: 'React is a frontent javascript framework'},{question: "Why use React?", content :"React is a favourite JS library among engineers"}, {question:""}]


export default () => {
  return (
    <div className="App">
      <Accordion items = {items}/>
    </div>
  );
}


