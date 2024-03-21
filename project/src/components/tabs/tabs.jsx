import { useState, useEffect} from 'react'

//declare function
export default function Tabs({tabsContent, onChange}){
    // how do we expect something to change that cna cycle through an array of content? 
    const [ currentTabIndex, setCurrentTabIndex ] = useState(0);


//how do we handle a click? What is changing? 
    function handleOnClick(getCurrentIndex){
        //how do change the thing we want to change to the content we want at that array index?
        setCurrentTabIndex(getCurrentIndex);
        //how do we represent what changed and how it should be repsented now? 
        onChange(getCurrentIndex);
    }
    return(
        <div className="wrapper">
            <div className="heading">
                {
                    // how do we show the content and return it? what info is necessary? 
                    tabsContent.map((tabItem, index) => (
                        //How do we give styling depending on if the current index is selected? how do we send that fucntion to handle changes into our jsx? where do we store the label of the time? Where do we put the label so we can know what we choose form in headers thinking
                    <div className={`tab-item ${currentTabIndex === index ? 'active' :' '}`}onClick={()=> handleOnClick(index)}key={tabItem.label}>
                        
                        <span className="label">{tabItem.label}</span>
                    </div>)
               ) }


            </div>
            <div className="content" style ={ {color: 'red'}}> 
                {
                    //how do we return the content and the container of content to know what content to display?
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }

            </div>

        </div>
    )
}