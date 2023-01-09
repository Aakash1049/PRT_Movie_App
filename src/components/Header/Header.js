import React, { useState } from 'react'
import Card from '../card/Card'
import SearchCard from '../searchCard/SearchCard'
import "./header.css"
const Header = ({ isAnySearch, setIsAnySearch, favourite, setFavourite }) => {
    const [serach, setSearch] = useState([])
    const [result, setResults] = useState([])
    function searchResults(e) {
        if (e.target.value == "") {
            console.log("length")
            setIsAnySearch(false)
            return
        }
        setIsAnySearch(true)
        setSearch(e.target.value)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=1db623ed205d03c1f91e429d1c1679d6&query=${serach}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResults(data.results)
                console.log(result)
            })
    }
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    Movies
                </div>
                <div className='search' onChange={(e) => { searchResults(e) }}>
                    <input style={{ width: "200px", height: "30px" }} type="text" placeholder='try searching avenger, avatar...' />
                </div>
                <div className='all-movies'>
                    {
                        result != undefined && isAnySearch &&
                        result.map((movie) => {
                            return (
                                <SearchCard movie={movie} favourite={favourite} setFavourite={setFavourite} />
                            )
                        })
                        
                    }
                    {
                        isAnySearch &&
                        <div className='fav-movie-list'>
                            <div className='fav-logo'>
                                Favourites Movies
                            </div>


                            <div className='all-movies'>
                                {
                                    favourite.map((movie) => {
                                        return (
                                            <Card movie={movie} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }

                </div>


            </div>

        </>
    )
}

export default Header