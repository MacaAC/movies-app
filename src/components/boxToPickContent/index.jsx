import { MoviesCards } from "../moviesCard"
//import { useState, useEffect } from "react"
import { Box, Spinner } from "@chakra-ui/react"

import { useFetch } from "../../hooks/useFetch"
import { useContext } from "react"
import { Context } from "../../context/Context"

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected + 1);
  };

export const BoxToPickContent = ({searchCategory,serieOrMovie}) => {
  const context = useContext(Context)

  const {movies, isLoading} = useFetch(`https://api.themoviedb.org/3/${serieOrMovie}/${searchCategory}?api_key=ae186e957330197b5106a6c66c8bd1df&language=${context.language}-US&page=1`,context.language)

    return (
      <Box
        display='flex'
        justifyContent='center'
        flexWrap= 'wrap'
      >
        {isLoading
        &&
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />}
        {movies?.map(movie=>{
        return(
          <MoviesCards

            searchCategory = {searchCategory}
            key = {movie.id}
            alt = {movie.title}
            movieTitle = {movie.title}
            movieDetails = {movie.overview}
            img = {movie.poster_path}
          />)
      })}
      </Box>

    )
}


