import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestService]
})
export class AppComponent {
  title = 'restClient';

  
}

