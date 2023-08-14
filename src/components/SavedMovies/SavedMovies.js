import React from "react";
import Search from "../Movies/Search/Search";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { savedMoviesList } from "../../utils/constans";

function SavedMovies() {
  return (
    <main className="savedMovies">
      <Search />
      <MoviesCardList moviesList={savedMoviesList} />
    </main>
  )
}

export default SavedMovies;
