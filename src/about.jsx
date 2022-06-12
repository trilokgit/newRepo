import React, { useState } from "react";
import Head from './heading'



function About(props) {

    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [location, setlocation] = useState('');

    const namehandler = (e) => {
        setname(e.target.value);
    };
    const agehandler = (e) => {
        setage(e.target.value);
    };
    const locationhandler = (e) => {
        setlocation(e.target.value);
    };
    const submithandler = (e) => {
        e.preventDefault();

        const data = {

            name: name,
            age: age,
            location: location
        }
        setname('');
        setage('');
        setlocation('');
        props.datacalling(data);
    };

    return (
        <>


            <form onSubmit={submithandler}>

                <label>Name</label>
                <input value={name} placeholder="Enter name" type="text" onChange={namehandler} />
                <br />
                <label>Age</label>
                <input value={age} placeholder="Enter age" type="number" onChange={agehandler} />
                <br />
                <label>Location</label>
                <input value={location} placeholder="Enter Location" type="text" onChange={locationhandler} />
                <br />
                <button type="submit" className="btn">Submit</button>

            </form>
            <br />
            <div>
                {
                    props.item.map((data,index) => (
                        <Head 
                            key = {index}
                            name={data.name}
                            id={data.age}
                            address = {data.location}
                        />
                    ))
                }
            </div>
          


        </>
    )
}

export default About;