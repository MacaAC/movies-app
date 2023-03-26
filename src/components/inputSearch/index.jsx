import { useState, useContext } from "react";
import { Input, Flex, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { navbarTranslations } from "../../translations/navbarTranslations";
import { Context } from "../../context/Context";
import { useTranslate } from "../../hooks/useTranslate";

export const SearchButton = () => {
  const navigate = useNavigate();
  const [valorInput, setValorInput] = useState("");

  const context = useContext(Context);
  const translations = useTranslate(navbarTranslations(context));

  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=ae186e957330197b5106a6c66c8bd1df&page=1`
  );
  const handleChange = (e) => {
    setValorInput(e.target.value);
  };

  const handleClick = () => {
    setSearchParams({
      query: valorInput,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchParams({
        query: valorInput,
      });
      navigate(`search?query=${valorInput}`);
    }
  };

  return (
    <Flex>
      <InputGroup
        w={"200px"}
        mr="10%"
        _focus={{ boxShadow: "none" }}
        _focusVisible={{ boxShadow: "none", outline: "none" }}
        _hover={{ border: "purple.500", color: "white" }}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="white" />}
        />
        <Input
          type="search"
          placeholder={translations.search}
          onSubmit={handleClick}
          onChange={handleChange}
          value={valorInput}
          onKeyDown={handleKeyDown}
          color="whiteAlpha.800"
          fontWeight={"bold"}
        />
      </InputGroup>
    </Flex>
  );
};
