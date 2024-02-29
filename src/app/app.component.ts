import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as C2PA from 'c2pa';
import { C2paService } from './c2pa.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'c2pa';

  constructor(private c2paService: C2paService) {} // Inject the service

  ngOnInit() {
    console.log('C2PA SDK Version:'); // No getVersion()
    console.log('hello from app component, ', C2PA);

    // Initialize the C2PA processing logic
    const wasmSrc = 'c2pa/dist/assets/wasm/toolkit_bg.wasm';
    const workerSrc = 'c2pa/dist/c2pa.worker.min.js';
    this.c2paService.loadAndProcessImage(wasmSrc, workerSrc);
  }
}
