function Movies() {

    const movies = [
        { movieName:"Avatar", Year:"2009", Seen:true},
        { movieName:"Goodfellas", Year:"1990", Seen:true},
        { movieName:"Pulp Fiction", Year:"1994", Seen:false},
    ];

    return (
        <>
        <section className="movielist">
            {
                movies.map((movie, index) =>(
                    <div key={index} className="movie">Namn: {movie.movieName} <br /> <br /> Utgiven: {movie.Year} <br /> <br /> Sedd: {movie.Seen ? "Ja" : "Nej"} </div>
                ))
            }
        </section>
        </>
    )
}

export default Movies;