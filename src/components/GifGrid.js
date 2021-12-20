import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs( category ).then(imgs => setImages(imgs))
    // }, [ category ])

    const {data: images , loading} = useFetchGifs(category);
    // getGifs();

    return (

        <>
            <h3>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img} //Al pasarlo desestructurado, envio todos los parametros de ese objeto
                        />
                    ))
                }
            </div>
        </>
    )
}
