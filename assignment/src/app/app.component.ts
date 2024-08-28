import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { NewmovieComponent } from "./newmovie/newmovie.component";
import { CommonModule } from '@angular/common';
import { MovieslistComponent } from "./movieslist/movieslist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, NewmovieComponent, MovieslistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment';
}
