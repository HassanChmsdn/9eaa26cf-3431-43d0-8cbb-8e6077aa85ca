import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MovieListComponent } from 'src/movies/movie-list/movie-list.component';
import { HeaderComponent } from 'src/shared/components/header/header.component';


import { MovieService } from 'src/movies/services/movie.service';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { DateFormatPipe } from 'src/shared/pipes/dateFormat.pipe';
import { TimeFormatPipe } from 'src/shared/pipes/timeFormat.pipe';
import { MatBadgeModule } from '@angular/material/badge';
import { CartComponent } from 'src/cart/cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from 'src/movies/movie-detail/movie-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    HeaderComponent,
    DateFormatPipe,
    TimeFormatPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatBadgeModule,
    MatSnackBarModule,
    FormsModule,

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
