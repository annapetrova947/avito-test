export const UPDATE_SERCHED_MOVIE = "UPDATE_SERCHED_MOVIE";

export const updateSerchedMovie = (name: string) => ({
  type: UPDATE_SERCHED_MOVIE,
  payload: name,
});
