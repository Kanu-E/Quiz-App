import React , {useState} from 'react'
import Dropdown from './dropdown'

const options = [
    {
        label: 'Afrikaans',
        value: 'Af'
    },
    {
        label:'Arabic',
        value: 'Ar'
    },

    {
        label: 'Hindi',
        value: 'Hi'
    }  
]

const Translate = ()=>{
    const [language, setLanguage] =useState(options[0])
    return(
        <div>
             <Dropdown
             selected={language}
             onSelectedChange ={setLanguage}
             options = {options}
             />
        </div>
       
    )
}

export default Translate