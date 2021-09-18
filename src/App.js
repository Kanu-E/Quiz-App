import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
  {
    title: 'What is React?' , content: 'React is a frontent javascript framework'
  },
  {
    title: "Why use React?", content :"React is a favourite JS library among engineers"
  }, 
  {
    title:"bb", content: "jj"
  }
]

const options = [
  {
    label: 'The color is Red?',
    value: "red"
  },
  {
    label: 'The color is Blue?',
    value: "blue"
  },
  {
    label: 'The color is Green?',
    value: "green"
  },
]



const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="App">
      <Header/>
      <Route path="/">
        <Accordion items = {items}/>
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown 
        label = "select a color"
        options={options} 
        selected={selected}
        onSelectedChange= {setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate/>
      </Route>

    </div>
  );
}

export default App;

