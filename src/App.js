import About from './about'
import React, { useState , useEffect} from 'react'
const jsondata = []

function App() {
    

    
    const [newdata, setnewdata] = useState(jsondata);

    function fetchdata() {

        fetch(`http://localhost:3000/posts`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setnewdata(data);
            })
        
    }

    useEffect(() => {

        fetchdata();
       
   },[])

    const calldata = (data) => {

        // const updatadata = [data, ...newdata];
        // setnewdata(updatadata);
        fetch(`http://localhost:3000/posts`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-Type' : 'application/json'
            }
        }).then(
            response => {

                fetchdata();
                
            }
        );

    }

    return (
       
       

        <>
            <About datacalling={ calldata } item = {newdata} />
        </>
    )

    
    
};

export default App;