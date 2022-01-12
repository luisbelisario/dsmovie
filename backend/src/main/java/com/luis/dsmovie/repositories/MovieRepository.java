package com.luis.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luis.dsmovie.entties.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	
}
