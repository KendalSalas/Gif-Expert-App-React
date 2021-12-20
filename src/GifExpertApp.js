import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {

    // const categories = ['One Punch', 'Samurai X', 'Dragom Ball']
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Hunter X Hunter'] );
    //     setCategories( cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <header>
            <h2>
                GifExpertApp
            </h2>

            <AddCategory setCategories = { setCategories }/>

            <hr />

        {/* <button onClick={ handleAdd }>Agregar</button> */}

        <ul>
            {
                categories.map( category => ( 
                    <GifGrid 
                        key = {category}
                        category={category}
                    />
                ))
            }
        </ul>

        </header>
    )
}

export default GifExpertApp
