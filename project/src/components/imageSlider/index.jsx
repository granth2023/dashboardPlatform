



export default function ImageSlider({url, limit}){

    const [images, setImages ] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl){
        //error handle

        try{
            setLoading(true)
            const response = await fetch(getUrl);
            const data = await response.json();

            if(data){
                setImages(data)
                setLoading(false);
            }
        }catch(e){
                setLoading(false)


        }
    }

    useEffect(()=> { 
        if(url !== '') fetchImages()

    },[url])

    if(loading){
        return<div> Loading Data ! Please wait</div>
    }
    if(errorMsg!== null){
        return<div> Error occured!{errorMsg}</div>
    }


    return ( 
        <div className="container">


        </div>
    )
}