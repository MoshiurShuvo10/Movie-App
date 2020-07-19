import React from 'react';
import Card from './Card';
import MovieList from './MovieList';

const showMoviesAsCards = (movie) => {
    return (
        <Card
            imgSrc={movie.movieImg}
            imgTitle={movie.movieTitle}
            desc={movie.movieDesc}
            link={movie.movieLink} />
    );
}

function App() {
    return (
        <>
            <h1 className='heading_style'>My 5 most Favorite Movies </h1>
            {MovieList.map(showMoviesAsCards)}
        </>
    );
}

export default App; 