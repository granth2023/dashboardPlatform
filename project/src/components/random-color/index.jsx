
import { useEffect, useState } from 'react'



export default function RandomColor(){
    //default type of color creation is hex 
    const [typeOfColor, setTypeOfColor] = useState('hex');
    //black is default color 
    const [color, setColor] = useState('#000000')
//need to be able to get random colors within the range of possible values
    function randomColorUtility(length) {
        //use math methods and return it times the length
        return Math.floor(Math.random()* length) 
    }
//create random hex
        function handleCreateRandomHexColor(){
            //what is the range of possible values for hex array
            const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
            //dont forget your # and store it
            let hexColor = "#"
///loop through for 6 values and add to the hex color the randomization within the length of possible values
            for(let i=0; i<6; i++){
                hexColor += hex[randomColorUtility(hex.length)];

            }
            console.log(hexColor)

            //set the color to hexcolor now that its been created

            setColor(hexColor)
        }
//create random rgb
        function handleCreateRandomRgbColor(){
            //store randomization function holding the length of rgb vlaues in 3 distinct variable r g b
            const r = randomColorUtility(256);
            const g = randomColorUtility(256);
            const b = randomColorUtility(256);
        // function stores random value in each of the three variables and then set the color
            setColor(`rgb${r}, ${g}, ${b}`)

        }
        // if we're in rgb creation handle create random rgb if twe're in hex create that and set the type of color for use effect 

        useEffect(() => {

            if(typeOfColor === 'rgb ') handleCreateRandomRgbColor()
             else handleCreateRandomHexColor() 
        }, [typeOfColor])

    return(
        <div style= {{
            width: '100vw',
            height: '100vh',
            background: color,
        }}>



     <div className="container">
        <button 
        onClick={() => setTypeOfColor('hex')}> Create HEX Color
        </button>
        <button 
        onClick={() => setTypeOfColor('rgb')}>Create RGB Color
        </button> 
        <button 
        onClick= {typeOfColor ==='hex'
        ? handleCreateRandomHexColor
        : handleCreateRandomRgbColor }
        >
        Generate Random Color
        </button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff',
            fontSize: '60px',
            marginTop: '50px',
            flexDirection: 'column',
            gap: '20px'
        }}>

        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>

            <h1>{color}</h1>
        </div>
    
        </div>
    </div>
    );
}
