import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'deliciasKiss'; 
  
  setMyStyles() {
    let styles = {
      'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/imagens/Header/headerBanner.jpg)',
      'height': '720px',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover'
    }
    return styles;
  }
}

