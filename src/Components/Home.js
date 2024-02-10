import { useState, useEffect } from 'react';
import '../style.css'

function Home() {
    const url = "https://fakestoreapi.com/products";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }


    useEffect(() => {
        fetchInfo();
    }, []);
    return (

        <div>
            <h1>ALL PRODUCTS</h1>
            <center>
                <div className='main'>
                    {data.map((dataObj, index) => {
                        return (

                            <div class="product" key={dataObj.id}>
                                <div><img src={dataObj.image} /></div>
                                <div className='prod-details'><h1>{dataObj.title}</h1>
                                    <p>${dataObj.price}</p></div>
                            </div>


                        );
                    })}
                </div>
            </center>

        </div>
    )
}

export default Home;