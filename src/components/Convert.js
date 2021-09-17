import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Convert = ({language, text})=>{
    const [translated, setTranlated] = useState('')
    useEffect(() => {
        const doTranslate = async ()=>{
            const {data} = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: text,
                        target:language.value,
                        key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    },
                }
            );
            setTranlated(data.data.translations[0].translatedText)
        };
        // doTranslate()
    },[language, text])
    console.log(translated)
    return <div></div>
};

export default Convert