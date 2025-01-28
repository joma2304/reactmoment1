import "./Movies.css"

function Movies() {
    //Array med objekt som är olika filmer
    const movies = [
        { movieName: "Avatar", Year: 2009, Seen: true }, //Namn, utgiven och sedd
        { movieName: "Goodfellas", Year: 1990, Seen: true },
        { movieName: "Pulp Fiction", Year: 1994, Seen: false },
        { movieName: "The Shawshank Redemption", Year: 1994, Seen: true },
        { movieName: "The Godfather", Year: 1972, Seen: false },
        { movieName: "The Dark Knight", Year: 2008, Seen: true },
    ];

    return (
        <>
            <section className="movielist">
                {   //Går igenom de film-objekt som finns och skriv ut dem med index som key (skriver ut Ja ifall seen = true och Nej ifall Seen = false på sedd:)
                    movies.map((movie, index) => (
                        <div key={index} className="movie"> <strong>Titel: {movie.movieName}</strong> <br /> Utgiven: {movie.Year} <br /> <br /> Sedd: {movie.Seen ? "Ja" : "Nej"} </div>
                    ))
                }
            </section>
        </>
    )
}
//Exportera komponent
export default Movies;