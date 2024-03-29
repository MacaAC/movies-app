export const generalTranslations = (par) => {
  if (par.language === "en") {
    return {
      selectLanguage: "Select language",
      topRated: "Top Rated",
      popularMovies: "Popular Movies",
      popularSeries: "Popular Series",
      trailer: "Watch Trailer",
      more: "More",
      onAir: "Currently on the air",
      latest: "The most newly created TV show",
      now: "Movies in theatres",
      genre: "GENRES",
      noTrailer: "No trailer was found for this movie or series",
      cast: "CAST",
    };
  }
  if (par.language === "es") {
    return {
      selectLanguage: "Selecccione lenguaje",
      popularMovies: "Películas Populares",
      popularSeries: "Series Populares",
      topRated: "Mejor Puntuadas",
      trailer: "Ver Trailer",
      more: "Más",
      onAir: "Actualmente al aire",
      latest: "Lo último en programas télevisivos",
      now: "Péliculas en cines",
      genre: "GÉNEROS",
      noTrailer: "No se encontró ningún trailer para esta pelúla o serie",
      cast: "ELENCO",
    };
  }

  if (par.language === "pt") {
    return {
      selectLanguage: "Selecione o idioma",
      popularMovies: "Filmes populares",
      popularSeries: "Shows Populares",
      topRated: "Melhor avaliado",
      trailer: "Assista o trailer",
      more: "Avançar",
      onAir: "atualmente no ar",
      latest: "O mais recente em programas de TV",
      now: "Filmes nos cinemas",
      genre: "GÊNEROS",
      noTrailer: "Nenhum trailer encontrado para este filme ou série",
      cast: "ELENCO",
    };
  }

  if (par.language === "fr") {
    return {
      selectLanguage: "Langue de sélection",
      topRated: "Les mieux notés",
      popularMovies: "Films Populaires",
      popularSeries: "Émissions Populaires",
      trailer: "Voir la bande-annonce",
      more: "Plus",
      onAir: "Actuellement à l'antenne",
      latest: "l'émission télévisée la plus récente.",
      now: "Péliculas en cinés",
      genre: "GENRES",
      noTrailer: "Aucune bande-annonce trouvée pour ce film ou cette série",
      cast: "JETER",
    };
  }

  if (par.language === "it") {
    return {
      selectLanguage: "Lingua di selezione",
      topRated: "Più votati",
      popularMovies: "Film Popolari",
      popularSeries: "Spettacoli Popolari",
      trailer: "Guarda il trailer",
      more: "Di più",
      onAir: "Attualmente in onda",
      latest: "Il programma televisivo più recente.",
      now: "Péliculas en cines",
      genre: "GENERI",
      noTrailer: "Nessun trailer trovato per questo film o serie",
      cast: "LANCIO",
    };
  }
  if (par.language === "ru") {
    return {
      selectLanguage: "выберите язык",
      popularMovies: "популярные фильмы",
      popularSeries: "популярный сериал",
      topRated: "Лучший рейтинг",
      trailer: "Смотреть трейлер",
      more: "дальше",
      onAir: "сейчас в эфире",
      latest: "самое недавно созданное телешоу.",
      now: "Пеликулас в кино",
      genre: "ЖАНРЫ",
      noTrailer: "Трейлер к этому фильму или сериалу не найден",
      cast: "БРОСАТЬ",
    };
  }
  if (par.language === "zh") {
    return {
      selectLanguage: "語言",
      topRated: "最高評價",
      popular: "熱門電影",
      trailer: "觀看預告",
      more: "更遠",
      onAir: "目前正在播出",
      latest: "最新制作的电视节目。",
      now: "電影院裡的電影",
      genre: "性別",
      noTrailer: "找不到這部電影或系列的預告片",
      cast: "投擲",
    };
  }
};
