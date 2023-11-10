import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyClient';
  constructor(
    private _loadingSrv: LoadingService
  ){}
  get loading(): number {
    return this._loadingSrv.loading;
  }
}
