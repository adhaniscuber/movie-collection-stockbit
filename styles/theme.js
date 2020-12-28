import { DefaultTheme } from 'styled-components'
import { overrideGoodsTheme } from 'goods-core'
import { ThemeType } from '@styled-system/core'

const fontBase = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
].join(', ')

const pokemonTypeColor = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
  shadow: '#014d4e',
  unknown: '#777777',
}

export const pokemonTypes = Object.keys(pokemonTypeColor)

const theme = overrideGoodsTheme({
  breakpoints: { sm: '481px', md: '561px', xl: '1081px' },
  colors: {
    green20: '#d6ffde',
    green50: '#03ac0e',
    green80: '#12883d',
    black30: '#31353b',
    black40: '#000000',
    red10: '#ffeaef',
    red60: '#ff5c85',
    red80: '#ef144b',
    orange70: '#ff8c00',
    orange90: '#fa581d',
    white30: '#f3f4f5',
    white40: '#e5e7e9',
    ...pokemonTypeColor,
  },
})

const appTheme = { ...theme, fontBase }

export default appTheme
