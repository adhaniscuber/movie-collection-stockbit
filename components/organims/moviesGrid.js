import { Box, Text } from "goods-core";
import { MovieCard } from "../molecules";

const data = [
  {
    title: 'sdasd'
  },
  {
    title: 'sdasd'
  },
  {
    title: 'sdasd'
  },
  {
    title: 'sdasd'
  },
  {
    title: 'sdasd'
  },
  {
    title: 'sdasd'
  },
  {
    title: 'sdasd'
  },
  {
    title: 'sdasd'
  },
]

const MoviesGrid = ({ movies }) => {
  return (
    <Box w h='100px' fDir='row'>
      {data && data.map((movie, index) => (
        <MovieCard key={`movie-${index}`} {...movie}  />
      ))}
    </Box>
  )
}

export default MoviesGrid
