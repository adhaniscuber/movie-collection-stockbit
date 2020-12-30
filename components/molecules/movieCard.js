import { Box, Text } from "goods-core";
import Link from 'next/link'
import Image from 'next/image'

const MovieCard = ({ key, ...props }) => {
  return (
    <Box w={1/3} m='xxs'>
      <Link href={`/detail?id=${key}`}>
        <Box w shadow='high' radius='l' overflow='hidden'>
          <Image width='100%' height='300px' objectFit='cover' src='https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg' />
          <Text>Name - tahun</Text>
        </Box>
      </Link>
    </Box>
  )
}

export default MovieCard
