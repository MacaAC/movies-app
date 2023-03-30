import { Card, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import noimage from "../../assets/noimage.png";
import { AiOutlineEye } from "react-icons/Ai";

export const MoviesCards = ({ alt, movieTitle, img, id }) => {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      <Card
        maxW={isSmallScreen ? "35%" : "20%"}
        height={isSmallScreen ? "190px" : "400px"}
        display="flex"
        m={4}
        ml={isSmallScreen ? 4 : ""}
        backgroundImage={
          img ? `https://image.tmdb.org/t/p/w500/${img}` : `${noimage}`
        }
        backgroundPosition="center"
        width={"100%"}
        backgroundSize="cover"
        alt={movieTitle}
        className="card-background"
      >
        {movieTitle ? (
          <Link to={`/details/movie/${id}`}>
            <Button
              variant={"unstyled"}
              fontSize={isSmallScreen ? "45px" : "45px"}
              ml={isSmallScreen ? "170px" : "210px"}
              mt={isSmallScreen ? "140px" : "345px"}
              position="relative"
              className="btn-card"
            >
              <AiOutlineEye />
            </Button>
          </Link>
        ) : (
          <Link to={`/details/tv/${id}`}>
            <Button
              variant={"unstyled"}
              fontSize={isSmallScreen ? "30px" : "45px"}
              ml={isSmallScreen ? "170px" : "210px"}
              mt={isSmallScreen ? "175px" : "345px"}
              position="relative"
              className="btn-card"
            >
              <AiOutlineEye />
            </Button>
          </Link>
        )}
      </Card>
    </>
  );
};
