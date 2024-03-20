


export default function MenuItem({item}){


    return(
        <li>

            {

                item && item.children && item.children.length > 0 ? 
                <MenuList list={item.children}/>
                : null 
            }
            <p>{item.label}</p>

        </li>
    )
}