
export const navbarTranslations = (par) =>{
   
        if (par.language === 'en'){ return{
        home: "Home",
        movies: "Movies",
        series: "Series",
        topRated: "Top Rated",
        upcomimg: "Upcoming",
        popular: "Popular",
        latest: "Latest",
        top: "Top Series",
        search: "Search"
    }}

    if (par.language === 'es'){
       return {
            home: "Inicio",
            movies: "Películas",
            series: "Series",
            topRated: "Mejor Puntuadas",
            upcomimg: "Próximamente",
            popular: "Populares",
            latest: "Lo último",
            top: "Series Top",
            search: "Busca"
        }
    }

    if (par.language === 'fr'){
      return{
            home: "Maison",
            search: "Chercher",
            movies: "Films",
            series: "Série",
            topRated: "Les mieux notés",
            upcomimg: "Bientôt disponible",
            popular: "Populaire",
            latest: "Dernier",
            top: "Top Série",
            
        }
    }
    if (par.language === 'it'){
        return{
              home: "Inizio",
              search: "Cercare",
              movies: "Films",
              series: "Serie",
              topRated: "Miglior voto",
              upcomimg: "Imminente",
              popular: "Popolare",
              latest: "L'ultimo",
              top: "Massima serie",
              
          }
      }
      if (par.language === 'ru'){
        return {
             home: "Начинать",
             movies: "Фильмы",
             series: "сериал",
             topRated: "Лучший рейтинг",
             upcomimg: "Скоро",
             popular: "популярный",
             latest: "Последний",
             top: "Топ серии",
             search: "Ищет"
         }
     }
 
}

