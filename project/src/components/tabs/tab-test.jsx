import Tabs from './tabs';
//what are we importing? is this is child? 
import './tabs.css';



function RandomCompoennt(){
    return<h1>Random Compoennt</h1>
}

//create the content 
export default function TabTest(){

//how do we store the content we want? 
    const tabs = [
        {
            label : 'Tab 1 ',
            content: <div>This is content for tab 1</div>
        },
        {
            label : 'Tab 2 ',
            content: <div>This is content for tab 2</div>
        },
        {
            label : 'Tab 3 ',
            content: <RandomCompoennt/>
        }
    ]
//handle the change and what are you changing? 
    function handleChange(currentTabIndex){
        console.log(currentTabIndex);

    }
//what do we return? What component are we returning? how do we call what we store the content? what do we run on chnage?
    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}