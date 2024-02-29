import { Injectable } from '@angular/core';
import { createC2pa } from 'c2pa';

const sampleImage = 'https://raw.githubusercontent.com/contentauth/c2pa-js/main/tools/testing/fixtures/images/CAICAI.jpg';

@Injectable({
  providedIn: 'root'
})
export class C2paService {

  async loadAndProcessImage(wasmSrc: string, workerSrc: string) {
    const c2pa = await createC2pa({
      wasmSrc: '/assets/c2pa/assets/wasm/toolkit_bg.wasm',
      workerSrc: '/assets/c2pa/c2pa.worker.min.js',
    });

    try {
      const { manifestStore } = await c2pa.read(sampleImage);
      console.log('C2PA raw lib:', c2pa);
      // c2pa.read

      // Assuming manifestStore has your C2PA data
      console.log('C2PA Manifest:', manifestStore); // Log to the console in the browser
    } catch (err) {
      console.error('Error reading image:', err);
    }
  }
}
