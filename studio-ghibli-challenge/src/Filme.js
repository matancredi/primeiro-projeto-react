import React from 'react';
import "./Filme.css";

export function Filme(){

    const [filmes, setFilmes ] = React.useState([])

    const URL = 'https://ghibliapi.herokuapp.com/films/'
    
    fetch(URL, {
      method:'get'
    })
    .then(function(response){
        return response.json()
    }).then(function(resp){
        setFilmes(resp)
        //console.log(filmes)
    }).catch(function(error){
        console.log(error)
    })

    function link(id){
        let linkFilme = URL.concat(id);
        return <a href={linkFilme}>Mais detalhes</a>
    }

    return (
         <ul>
         {
            filmes.map((itemJson, id) => 
                
                    <div class = "item">
                    <span class="titulo">&#9733;   {itemJson.title} </span>
                    <br></br>
                    <br></br>
                    <span class="descricao">{itemJson.description}</span>
                    <br></br>
                    <span>{link(itemJson.id)}</span>
                    </div>
                
            )
         }
         </ul>
    );
}

export default Filme


