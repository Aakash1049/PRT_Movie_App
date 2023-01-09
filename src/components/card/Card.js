import React, { useState } from 'react'
import "./Card.css"
const Card = ({ movie, favourite, setFavourite }) => {
    console.log(movie)
    const [isMouseOver, setIsMouseOver] = useState(false)
    const [addedTofav, isAddedTofav] = useState(false)
    function handleMouseOver() {
        setIsMouseOver(true)
    }
    function handleMouseOut() {
        setIsMouseOver(false)
    }
    return (
        <div className='card' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className='image'>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="img" />
            </div>
            {
                isMouseOver &&
                <span className='add-fav'>
                    {!addedTofav ?
                        <>
                            <span>Add to favourites</span> &nbsp; &nbsp;
                            <i onClick={() => { isAddedTofav(true); setFavourite([...favourite, movie]) }} class="fa-regular fa-heart"></i>
                        </>
                        :
                        <>
                            <span>Remove from favourites</span> &nbsp; &nbsp;
                            <i onClick={() => {
                                isAddedTofav(false);
                                // let index=favourite.indexOf(movie)
                                // const x=favourite.splice(index,1)
                                // setFavourite(favourite)
                            }
                            }
                                class="fa-solid fa-heart"></i>
                        </>
                    }
                </span>
            }
        </div>
    )
}

export default Card