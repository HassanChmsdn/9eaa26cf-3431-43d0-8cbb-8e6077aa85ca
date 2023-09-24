import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable()
export class MovieService {


    private apiUrl = 'https://teclead-ventures.github.io/data/london-events.json';

    constructor(private http: HttpClient) { }


    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${this.apiUrl}`);
    }

    getMovieById(id: number): Observable<Movie | null> {
        return this.http.get<Movie | null>(`${this.apiUrl}/${id}`);
    }

}
