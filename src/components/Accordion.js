import React from 'react';

const  Accordion =({items})=>{
    const onTitleClick = (index)=>{
        console.log('question clicked', index)
    }
    const renderedItems = items.map((item, index)=>{
        return(<React.Fragment key= {item.question}>
                <div 
                    className = "title active"  onClick={ () =>onTitleClick( index)}>
                     <i className="dropdown icon"/>
                    {item.question}
                </div>
                <div className = "content active">
                    <p> {item.content}</p>
                </div>
        
            </React.Fragment>)
    })
    return <div className="ui styled accordion">
                {renderedItems}
            </div>
}

export default Accordion