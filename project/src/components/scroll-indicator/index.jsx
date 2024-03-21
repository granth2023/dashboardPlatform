import { useEffect, useState } from "react";
import './scroll.css'

//how do we take the information we want and perform on it? 
export default function ScrollIndicator({url}){
//what do we need to change in our view? what if its not working or not ready? what are we calculating/ observing? 
    const [data, setData] = useState([]);
    const [ loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const [ scrollPercentage, setScrollPercentage] = useState(0);

    //how do we get our data? 

    async function fetchData(getUrl){
        try{
            //how are we showing our data? what function gets the data? what do we call that? 
                setLoading(true);

                const response = await fetch (getUrl);
                const data = await response.json();

             //what happens if there is data and data within the data? What do we do with the data? can we update our page? 

                if(data && data.products && data.products.length > 0 ){
                    setData(data.products)
                setLoading(false);
                }
        }catch(e){
                console.log(e)
                setErrorMessage(e.message)
            }
        }
    
//how do we constnatly keep using something? what do we need to use no matter what? what allows us to do that? 
    useEffect(()=> {
        fetchData(url);
    },[url])
//how do we handle the math of scrolling? 
    function handleScrollPercentage(){
        //calculate how much and what is full height and get that? 
        console.log(
            document.body.scrollTop, 
            document.documentElement.scrollTop,
            document.documentElement.scrollHiehgt,
            document.documentElement.clientHeight)


            //how do we create a number?  and what matth do we need? how much m ore until we scroll to the top? 
            const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop ;
//how high can the whole thing go? 
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            //how do we create this math and what do we do to keep it going? 
            setScrollPercentage((howMuchScrolled/ height) * 100)
    }
//how do we allow for contious scroll? 
    useEffect(()=> {
        window.addEventListener("scroll", handleScrollPercentage);
        return() =>{

            //what happens when we stop scrolling? 
            window.removeEventListener("scroll", ()=> {});
        }
    },[])

    console.log(data, loading)
    console.log(scrollPercentage)

    if(errorMessage){
        return <div> Errro! {errorMessage}</div>
    }

    if(loading){
        return <div> Loading data 1 Please wait</div>
    }
    return( 
        <div>
            <div className="top-container">
            <h1> Custom Scroll Indicator</h1>
            //how we create visibility on scroll percetnage where is that contained withiin a class? 
            <div className="scroll-progress-tracking-container">
                <div className="current-progress-bar" style={{width: `${scrollPercentage}%`}}>
                    
                    </div> 
            </div>
            </div>
            <div className="data-container">
                {

                    //what are we displaying? how do we show the title in our jsx? what do we do? do we have to make sure there is data past a certain point? 
                    data && data.length > 0 ? 
                        data.map(dataItem => <p> {dataItem.title} </p>)
                    :null
                }

            </div>

        </div>
    )
}