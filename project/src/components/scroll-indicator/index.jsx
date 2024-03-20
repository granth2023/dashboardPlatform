

export default function ScrollIndicator({url}){

    const [data, setData] = useState([]);
    const [ loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    async function fetchData(getUrl){
        try{
                setLoading(true);
                const response = await fetch (getUrl);
                const data = await response.json();

             

                if(data && data.products && data.products.length > 0 ){
                    setData(data.products)
                setLoading(false);
                }
        }catch(e){
                console.log(e)
                setErrorMessage(e.message)
            }
        }
    

    useEffect(()=> {
        fetchData(url);
    },[url])

    console.log(data, loading)
    return( 
        <div>

        </div>
    )
}