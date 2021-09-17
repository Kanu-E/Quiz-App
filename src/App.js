import React, {useState} from 'react';
// import Accordion from './components/Accordion'
import Search from './components/search'
// import Dropdown from './components/dropdown'
import Translate from './components/Translate'
// const items = [{title: 'What is React?' , content: 'React is a frontent javascript framework'},{title: "Why use React?", content :"React is a favourite JS library among engineers"}, {title:"bb", content: "jj"}]

// const options = [
//   {
//     label: 'The color is Red?',
//     value: "red"
//   },
//   {
//     label: 'The color is Blue?',
//     value: "blue"
//   },
//   {
//     label: 'The color is Green?',
//     value: "green"
//   },
// ]



const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="App">
      {/* <Accordion items = {items}/> */}
      {/* <Search/> */}
      {/* <button onClick={()=>setShowDropdown(!showDropdown)}> Toggle </button> */}
      {/* {showDropdown?
      <Dropdown 
        options={options} 
        selected={selected}
        onSelectedChange= {setSelected}
      />:null} */}
      <Translate/>
    </div>
  );
}

export default App;

