import { Component, OnInit } from '@angular/core';
import { ConfigService } from './shared/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  configVal: string;
  constructor (private config: ConfigService) {}

  ngOnInit() {
    this.configVal = this.config.hello;
  }
}
