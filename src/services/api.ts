import { ApiResponse, ApiResponseReview, ApiResponseSeasons, Movie } from "./../utils/types";
import { store } from "./../index";
import {BASE_URL} from './../const/const'

export function getMovies(): Promise<ApiResponse> {
  const token: string | undefined = process.env.REACT_APP_TOKEN;

  const url = new URL(BASE_URL);
  
  const state = store.getState();
  const {country, age, year} = state.filters.filters;
  const {currentPage, itemsPerPage} = state.pageOptions.options;
  const serchedMovie = state.serchedMovie.name;

  let requestUrl: string;

  if (serchedMovie !== '') {
    requestUrl = `${url}movie/search?query=${serchedMovie}&limit=${itemsPerPage}&page=${currentPage}`
  }

  else {

    requestUrl = `${url}movie?limit=${itemsPerPage}&page=${currentPage}`;
    if (country !== '') {
      requestUrl += `&countries.name=${country}`
    }
  
    if (year !== '') {
      if (year === 'до 1990') {
        requestUrl += `&year=1900-1990`
      }
      else {
        requestUrl += `&year=${year}`
      }
      
    }
  
    if (age !== '') {
      
      requestUrl += `&ageRating=${age.slice(0, -1)}-18`
    }
  }

  return new Promise((resolve, reject) => {
    fetch(requestUrl, {
      method: "GET",
      headers: {
        "X-API-KEY": `${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Попробуйте еще раз");
        }
        return response.json();
      })
      .then((data: ApiResponse) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getMovieDetails(id: number){
  const token: string | undefined = process.env.REACT_APP_TOKEN;
  const url = new URL(`${BASE_URL}movie/${id}`);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      headers: {
        "X-API-KEY": `${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Попробуйте еще раз");
        }
        return response.json();
      })
      .then((data: Movie) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}


export function getMovieReview(id: number, page: number){
  const token: string | undefined = process.env.REACT_APP_TOKEN;
  const url = new URL(`${BASE_URL}review?movieId=${id}&page=${page}`);
  
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      headers: {
        "X-API-KEY": `${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Попробуйте еще раз");
        }
        return response.json();
      })
      .then((data: ApiResponseReview) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });

}


export function getEpisodes(id: number){
  const token: string | undefined = process.env.REACT_APP_TOKEN;
  const url = new URL(`${BASE_URL}season?movieId=${id}&limit=100`);
  
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      headers: {
        "X-API-KEY": `${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Попробуйте еще раз");
        }
        return response.json();
      })
      .then((data: ApiResponseSeasons) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });

}
