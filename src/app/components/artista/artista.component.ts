import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista: any = {};
  toptrack: any[] = [];
  loadingArtistas: boolean;

  constructor( private router: ActivatedRoute ,
               private spotify: SpotifyService) {
    this.loadingArtistas = true;
    this.router.params.subscribe( params => {
       this.getArtista( params.id );
       this.getTopTracks( params.id );
    });
  }

  getArtista( id: string) {
    this.spotify.getArtista ( id )
    .subscribe ( artista => {
      this.artista = artista;
      this.loadingArtistas = false;
    });

  }

  getTopTracks( id: string ) {
    this.spotify.getTopTrack ( id )
    .subscribe ( TopTracks => {
      console.log(TopTracks);
      this.toptrack = TopTracks;
    });
  }
}
