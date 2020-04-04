  
import React, { useEffect, useState } from 'react';
import { Gif } from "@giphy/react-components";

function ApiGif(props) {

    const [gifs, setGifs] = useState(null);
    const key = 'uv6gNkBIRpI7WZ1Vd0X8s9xwk6kJ8mf0'
    const query = props.search
    const limit = 100

    useEffect(() => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=${limit}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setGifs(result)
                },
                (error) => {
                    console.log('error', error);
                }
            )
    }, [query])

    return (
        <>
            { gifs
                && gifs.data.map(gif => {
                    return <div style={{float:'right', padding:'10px'}}>
                        <Gif key={gif.id} gif={gif} width={200} />
                        </div>
                })
            }
        </>
    )

}

export default ApiGif;