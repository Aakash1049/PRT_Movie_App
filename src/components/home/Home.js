import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import Header from '../Header/Header'
import "./home.css"
const Home = () => {
    const [topRated, setTopRated] = useState([])
    const [isAnySearch, setIsAnySearch] = useState(false)
    const [favourite, setFavourite] = useState([])
    useEffect(() => {
        // fetch( " http://img.omdbapi.com/?i=tt3896198&apikey=fa51c577")
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=1db623ed205d03c1f91e429d1c1679d6")
            .then(res => res.json())
            .then(data => {
                console.log(data)

                setTopRated(data.results.slice(0, 10))
                console.log(topRated)
            })
    }, [])
    return (
        <>
            <Header isAnySearch={isAnySearch} setIsAnySearch={setIsAnySearch} favourite={favourite} setFavourite={setFavourite} />
            <div className='all-movies'>
                {
                    !isAnySearch &&
                    topRated.map((movie) => {
                        return (
                            <Card movie={movie} favourite={favourite} setFavourite={setFavourite} />
                        )
                    })
                }
            </div>
                {
                    !isAnySearch &&
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
           
        </>
    )

}
export default Home