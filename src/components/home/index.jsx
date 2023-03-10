import { useContext } from "react";
import { Context } from "../../context/Context";
import { Box, Flex } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Footer } from "../footer";
import { CategoryFilms } from "../categoryFilm";
import { MoviesCarousel } from "../carousel";

export const Home = () => {
  const context = useContext(Context);

  return (
    <Flex flexDirection={"column"}>
      <Box as="div">
        <MoviesCarousel searchCategory={`popular`} serieOrMovie={`movie`} />
      </Box>

      <Box
        as="section"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg={context.clearTheme ? "brand.secondary" : "brand.accent"}
        width="100%"
        height="100vh"
      >
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="row">
            <CategoryFilms
              categoryTitle="Popular Movies"
              searchCategory="popular"
              serieOrMovie={`movie`}
            />
            <CategoryFilms
              categoryTitle="Top Rated"
              searchCategory="top_rated"
              serieOrMovie={`movie`}
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};
