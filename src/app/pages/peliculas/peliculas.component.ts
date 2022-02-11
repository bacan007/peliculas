import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interface/pelicula.interface';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {

  peliculas: Pelicula[] = [];

  constructor( ) { 

  }

  agregarPelicula( title:string, year:string, genres:string ){

    const pelicula: Pelicula = { Title : title, Year: parseInt(year), Genre: genres}

    this.peliculas.push(pelicula);

  }

  quitarPelicula( indice:number ){

    this.peliculas.splice(indice, 1);

  }
  

}
