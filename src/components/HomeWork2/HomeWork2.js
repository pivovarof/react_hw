import { useState } from "react"
import './HomeWork2.css'

const HomeWork2 = () => {

    // const [query, setQuery] = useState();
    const [page, setPage] = useState(1);
    const [inputValue, setInputValue] = useState('');    
    const [card, setCard] = useState();

    // setQuery(inputValue)


    const func = async () => {

        setPage(1)

        const urlImage = await fetch(`https://pixabay.com/api/?q=${inputValue}&page=${page}&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12`)
        const res = await urlImage.json();
        
        setCard(res.hits.map(item => (
            
            <li key={item.id} className="card-img">
                <img src={item.previewURL} alt="logo" />
            </li>
            
         ))) 
        
    };
     

    


    return (
        <div className="conteiner">
            <h1>What do you like?</h1>
            <div className="block-input">
            <input type="text" name="serch" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={func}>FIND</button>
            </div>           
            <div className="postImages">
                <ul className="block-cards">
                    {card}
                </ul>
            </div>
        </div>
    )
}

export default HomeWork2;