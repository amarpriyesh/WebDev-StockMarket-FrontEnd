import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    const [result, setResult] = useState(null);
    const [relatedData, setRelatedData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.example.com/results/${id}`)
            .then(response => {
                setResult(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get(`https://api.example.com/related-data/${id}`)
            .then(response => {
                setRelatedData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="container">
            {result ?
                <div>
                    <h2>{result.title}</h2>
                    <img src={result.imageUrl} alt={result.title} />
                    <p>{result.description}</p>
                    {relatedData &&
                        <div>
                            <h3>Related Data</h3>
                            <ul>
                                {relatedData.map(data => (
                                    <li key={data.id}>
                                        <a href={`/details/${data.id}`}>
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div> :
                <p>Loading...</p>
            }
        </div>
    );
}

export default Details;
