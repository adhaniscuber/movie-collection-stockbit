import { Box, Text } from 'goods-core'
import { DropdownAsync } from 'goods-ui'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <Box w>
      <Box w maxW='800px' m='0 auto' p ='xl'>
        <Box w>
          <DropdownAsync />
        </Box>
        <Box w>
          <Box shadow='high' radius='l' overflow='hidden'>
            <Image width={100} height={200} src='https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg' />
            <Text>Name</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
