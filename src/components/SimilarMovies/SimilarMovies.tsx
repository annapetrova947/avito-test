import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Movie} from './../../utils/types'
import { Link } from 'react-router-dom';
import './SimilarMovies.css';

export function SimilarMovies (props: {movies: Movie[]}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    {
      props.movies ? 
      <>
      <h2 className='sim'>Похожие фильмы</h2>
      {
        props.movies.length !== 0 ? 
        <Slider {...settings}>
      {props.movies.map((movie, index) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className='movie_link'>
        <div className='movie'>
          <img src={movie.poster.url} className='card_photo' alt='Фото фильма'/>
          <p>{movie.name}</p>
        </div>
      </Link>
      ))}
    </Slider> :
    <p>Нет информации о похожих фильмах</p>
      }
      
      </>
       : ''
    }
    </>
    
  );
};

