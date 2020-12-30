import { Box, Text } from 'goods-core'
import { Icon } from 'goods-core/ssr'
import {Input } from 'goods-ui'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovie } from '../services'
import { fetchMovieList } from '../store/movies/actions'
import { useRouter } from 'next/router'
import { MoviesGrid } from '../components/organims'

export default function Home() {
  const router = useRouter()

  const {
    movieList,
    loading,
    error,
    searchKey,
    page,
    totalMovies,
  } = useSelector(state => state.movie);

  const dispatch = useDispatch()

  const onNextPage = useCallback(() => {
    dispatch(fetchMovieList({ pageChanged: true }));
  }, []);

  useEffect(() => {
    const s = ''
    if (s && s.length >= 3 && s !== searchKey) {
      dispatch({ type: 'SET_SEARCH_KEY', payload: { searchKey: s } });
    } else {
      router.replace(`?s=${searchKey}`);
    }
    return () => {
      dispatch({ type: 'RESET_ERROR' });
    };
  }, []);

  useEffect(() => {
    if (page === 1 && searchKey.length >= 3) {
      dispatch(fetchMovieList());
    }
  }, [searchKey, page]);

  useEffect(() => {
    dispatch(fetchMovieList({ pageChanged: true }));
  }, [])

  return (
    <Box w>
      <Box w maxW='800px' m='0 auto' p ='xl'>
        <Box w>
          <Input prefix={<Icon name='search' c='blue50' w='60px' h='60px' />} placeholder='Search movies...' />
        </Box>
        <MoviesGrid movies={movieList} />
      </Box>
    </Box>
  )
}
