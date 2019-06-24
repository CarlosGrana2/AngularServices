import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: []): string {

    if ( !images ) {
      return 'assets/img/noimage.png';
    }

    if (images.length > 0) {
      return this.Imagen(images).url;
    } else {
      return 'assets/img/noimage.png';
    }

  }


  private Imagen(images) {
    return images[0];
  }
}
