import React, {useState} from 'react';
// import Accordion from './components/Accordion'
import Search from './components/search'
import Dropdown from './components/dropdown'
// const items = [{title: 'What is React?' , content: 'React is a frontent javascript framework'},{title: "Why use React?", content :"React is a favourite JS library among engineers"}, {title:"bb", content: "jj"}]
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
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="App">
      {/* <Accordion items = {items}/> */}
      {/* <Search/> */}
      <Dropdown 
        options={options} 
        selected={selected}
        onSelectedChange= {setSelected}
      />
    </div>
  );
}

export default App;

