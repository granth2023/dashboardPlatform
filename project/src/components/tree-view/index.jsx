
import MenuList from './menu-list'

import menus from './data.js';
import './styles.css';

export default function TreeView({menus = []}){


        return(
            <div className="tree-list-container">


                


            <MenuList list={menus}/>




            </div>
        )


}


