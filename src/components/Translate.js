import React , {useState} from 'react'
import Dropdown from './dropdown'
import Convert from './Convert'

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

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
    const [text, setText]= useState('')
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label> Enter Text</label>
                    <input value={text} onChange={(e)=> setText(e.target.value)}/>
                </div>
            </div>
             <Dropdown
             label = "Select a language"
             selected={language}
             onSelectedChange ={setLanguage}
             options = {options}
             />
             <hr />
             <h3>Output</h3>
             <Convert text ={text} language={language}/>
        </div>
       
    )
}

export default Translate