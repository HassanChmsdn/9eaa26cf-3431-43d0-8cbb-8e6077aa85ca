// movie-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieSelectionService } from '../services/movie-selection.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass'],
})
export class MovieDetailComponent implements OnInit {
  selectedMovie: Movie | null = null;
  loaded: boolean = false;

  constructor(private movieSelectionService: MovieSelectionService) { }

  ngOnInit() {
    this.movieSelectionService.getSelectedMovie().subscribe((movie) => {
      this.selectedMovie = movie;
      this.loaded = true;
    });
  }

  safeAccess(obj: any, prop: string, defaultValue: any = ''): any {
    return obj ? obj[prop] || defaultValue : defaultValue;
  }
}
