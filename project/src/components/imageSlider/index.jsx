



export default function ImageSlider({url, limit}){

    const [images, setImages ] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    async function fetchImages(getUrl){
        //error handle
    }

    useEffect(()= > { 
        if(url !== '') fetchImages()

    },[url])


    return ( 
        <div className="container">


        </div>
    )
}