import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { savedMoviesList } from "../../utils/constans";

function SavedMovies() {
  return (
    <main className="savedMovies">
      <SearchForm />
      <MoviesCardList moviesList={savedMoviesList} />
    </main>
  )
}

export default SavedMovies;
