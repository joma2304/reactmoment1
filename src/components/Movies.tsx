function Movies() {

    const movies = [
        { movieName: "Avatar", Year: 2009, Seen: true },
        { movieName: "Goodfellas", Year: 1990, Seen: true },
        { movieName: "Pulp Fiction", Year: 1994, Seen: false },
        { movieName: "The Shawshank Redemption", Year: 1994, Seen: true },
        { movieName: "The Godfather", Year: 1972, Seen: false },
        { movieName: "The Dark Knight", Year: 2008, Seen: true },
    ];

    return (
        <>
            <section className="movielist">
                {
                    movies.map((movie, index) => (
                        <div key={index} className="movie"> <strong>Titel: {movie.movieName}</strong> <br /> Utgiven: {movie.Year} <br /> <br /> Sedd: {movie.Seen ? "Ja" : "Nej"} </div>
                    ))
                }
            </section>
        </>
    )
}

export default Movies;