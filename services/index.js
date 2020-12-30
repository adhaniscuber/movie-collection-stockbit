
import axios from 'axios';

export const request = axios.create({
  baseURL: process.env.BASE_URL,
  params: { apikey: process.env.API_KEY },
});



export const fetchAllMovie = async (params) => {
  try {
    return await request.get('', { params });
  } catch (error) {
    throw new Error(error)
  }
}

export const fetchMovie = async (id) => {
  try {
    const { data } = await request.get('', { params: { id } })

    const { imdbID, imdbRating, imdbVotes } = data

    return {
      imdbVotes,
      imdbRating,
      imdbID,
      title: data.Title,
      year: data.Year,
      type: data.Type,
      poster: data.Poster,
      rated: data.Rated,
      released: data.Released,
      runtime: data.Runtime,
      genre: data.Genre,
      director: data.Director,
      writer: data.Writer,
      actors: data.Actors,
      plot: data.Plot,
      language: data.Language,
      country: data.Country,
      awards: data.Awards,
      metascore: data.Metascore,
      dvd: data.DVD,
      boxOffice: data.BoxOffice,
      production: data.Production,
      website: data.Website,
      ratings: data.Ratings.map(rating => ({
        source: rating.Source,
        value: rating.Value,
      })),
    };

  } catch (error) {
    throw new Error(error)
  }
}
