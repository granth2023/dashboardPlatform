import { useState } from "react";
import MenuList from ",./MenuList";
 import {FaMinus, FaPlus}  from 'react-icons'


export default function MenuItem({item}){

    const [ displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentlabel){
        setDisplayCurrentChildren({
        ...displayCurrentChildren,
        [getCurrentlabel] : !displayCurerntChildren[getCurrentlabel],
    })
}
console.log(displayCurrentChildren)

    return(
        <li>
            <div className="menu-item">
            <p>{item.label}</p>
            {
                item && item.childnre && item.childnre.length ? <span oncClick={()=>{handleToggleChildren(item.label)}}>
                    {
                        displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25}/> : <FaPlus color="#fff" size={25}/>
                    }

                </span> : null}

            </div>

            {

                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]? 
                <MenuList list={item.children}/>
                : null 
            }
            

        </li>
    )
}