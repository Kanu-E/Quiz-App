import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Convert = ({language, text})=>{
    const [translated, setTranlated] = useState('')
    // const [Text, setText] = useState('')
    const [debounceText, setDebounceText] = useState(text)

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebounceText(text);
        }, 500)
        return ()=>{
            clearTimeout(timerId);
        };
    },[text])

    useEffect(() => {
        const doTranslate = async ()=>{
            const {data} = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: debounceText,
                        target:language.value,
                        key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    },
                }
            );
            setTranlated(data.data.translations[0].translatedText)
        };
        doTranslate()
    },[language, debounceText])
    
    return (
        <div>
            <h3>{translated}</h3>
        </div>
    )
};

export default Convert