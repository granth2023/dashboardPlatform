


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
            <div style={{display: 'flex', gap: '20px'}}>
            <p>{item.label}</p>
            {
                item && item.childnre && item.childnre.length ? <span oncClick={()=>{handleToggleChildren(item.label)}}>+</span> : null}

            </div>

            {

                item && item.children && item.children.length > 0 ? 
                <MenuList list={item.children}/>
                : null 
            }
            

        </li>
    )
}