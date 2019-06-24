import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor( private spotify: SpotifyService) { }

  artistas: any[] = [];
  loading: boolean;

  buscar( termino: string) {

  if (termino.length > 0) {
      this.loading = true;
      this.spotify.getArtistas( termino )
      .subscribe( (data: any) => {
        this.artistas = data;
        this.loading = false;
      });
  }
  }
}
