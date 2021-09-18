import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/search'
import Dropdown from './components/dropdown'
import Translate from './components/Translate'
import Route from './components/Route'

const items = [{title: 'What is React?' , content: 'React is a frontent javascript framework'},{title: "Why use React?", content :"React is a favourite JS library among engineers"}, {title:"bb", content: "jj"}]

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

// const showAccordion =()=>{
//   if (window.location.pathname === "/") {
//     return <Accordion items = {items}/>
//   }
// }
// const showList =()=>{
//   if (window.location.pathname === "/list") {
//     return <Search/>
//   }
// }

// const dropdown =()=>{
//   if (window.location.pathname === "/dropdown") {
//     return <Dropdown/>
//   }
// }

// const translate =()=>{
//   if (window.location.pathname === "/translate") {
//     return <Translate/>
//   }
// }



const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="App">
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

