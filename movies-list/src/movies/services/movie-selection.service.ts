import { Injectable, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MovieSelectionService {
    private selectedMovieSubject = new BehaviorSubject<Movie | null>(null);

    setSelectedMovie(movie: Movie | null) {
        this.selectedMovieSubject.next(movie);
    }

    getSelectedMovie(): Observable<Movie | null> {
        return this.selectedMovieSubject.asObservable();
    }
}
