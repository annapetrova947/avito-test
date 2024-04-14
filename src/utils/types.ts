interface Genre {
  name: string;
}

export interface Actor {
  id: number,
  photo: string,
  name: string,
  description: string
}

export interface Movie {
  id: number;
  title: string;
  genres: Genre[];
  ageRating: number;
  logo: {
    url: string;
  };
  name: string;
  movieLength: number;
  poster: {
    url: string;
  };
  description: string;
  persons: Actor[];
  alternativeName: string
}

export interface ApiResponse {
  docs: Movie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Review {
  
    id: number,
    title: string,
    type: string,
    review: string,
    author: string
}

export interface ApiResponseReview {
  docs: Review[];
}

export interface ApiResponseSeasons {
  docs: Season[];
}

export interface Episode {
  number: number;
  name: string
}

export interface Season {
  id: string;
  episodes: Episode[];
  name: string

}

export interface Filters {
  country: string;
  age: string;
  year: string;
}


