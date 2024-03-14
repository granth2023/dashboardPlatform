//create components folder, create accordion folder -- resuable component



//single selection  opens one menu at a time 
//multiple selection opens
import React, { useState } from 'react'
import data from './data.js'
import './style.css';

export default function Accordion(){

    const [selected, setSelected] = useState(null);
    const [enableMultipleSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    // enable multi selection for a false use state 
    // store multiple ids in variable use state with empty array for multipple varibale,

    function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  


}

    function handlemultipleSelection(getCurrentId) {
        let cpymultiple =  [...multiple]

        const findIndexOfCurrentId = cpymultiple.indexOf(getCurrentId)

        if( findIndexOfCurrentId === -1) cpymultiple.push(getCurrentId);
        else cpymultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpymultiple);
    }
//CREATE MULTI SELECTION FUNCTION  GETCURRENT ID 
    // DECLARE VARIABLE NAME CPY MULTIPLE SET TO WHATEVER MULTIPLE 

    //DECALRE CONST FINDINDEXOFCURRENTID  STORING CPY MUTLIPTLE INDEX OF CURRENT ID 

    //CONSOLE LOG MINUS 1    IF FIND INDEX OF CURRENT ID MINUS ONE CPY MUTLIPLE PUSH CURRENT ID
    //ELSE SPLIE OFF CPY PASSING 1 ITEM OF FIND INDEX OF CURRENT ID


    //SET MUTLIPLE WILL BE SET TO CPY MULITPLE


console.log(selected, multiple);


    return (
    <div className="wrapper">
        <button onClick= {() => setEnableMultiSelection(!enableMultipleSelection)} >Enable Multi Selection
        
        </button>
        <div className="accordion">
        { data && data.length > 0 ? (
           
            data.map((dataItem) => (
            
            <div className="item">
                <div 
                onClick={() =>

                    (enableMultipleSelection) 
                    ? handlemultipleSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                 className="title"
                 >
                    <h3> { dataItem.question} </h3>
                    <span>+</span>

                    </div> 
                    { enableMultipleSelection 
                        ? multiple.indexOf(dataItem.id) !== -1 && (
                        <div className= "content">{dataItem.answer}</div> 
                        )
                        : selected === dataItem.id && (
                            <div className= "content">{dataItem.answer}</div>
                        )} 
                  
                      </div>
            ))
                   ) : (
                    <div> No data found! </div>
              )}



        </div>
    </div>
)
                   }
                