import React from 'react';
import { useEffect, useState } from "react"

import './ImageFinder.css'

const ImageFinder = () => {


    const [page, setPage] = useState(1);
    const [inputValue, setInputValue] = useState('');
    const [card, setCard] = useState();
    const [query, setQuery] = useState('');

    useEffect(() => {
        async function fetchData() {
            const urlImage = await fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12`);
            const res = await urlImage.json();
            setCard(res)
        }
        fetchData()
    }, [page, query])

    const onSearch = () => {
        setQuery(inputValue);
        setPage('1');
        setInputValue('')

    }

    const liElem = card && card.hits.map(item => (
        <li key={item.id} className="card-img">
            <img src={item.previewURL} alt="logo" />
        </li>
    ))



    return (
        <div className="conteiner">
            <h1>What do you like?</h1>
            <div className="block-input">
                <input type="text" name="serch" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={onSearch}>FIND</button>
            </div>
            <div className="postImages">
                <ul className="block-cards">
                    {liElem}
                </ul>
            </div>
        </div>
    )
}

export default ImageFinder;