import { Component, OnInit, Input } from '@angular/core';

// import {PanelModule} from 'primeng/panel';

// Simplified representation of your C2PA manifest
interface C2paManifest {
  title: string;
  format: string;
  assertions: any[]; // Placeholder - refine this later
  // ... other properties you need
}

@Component({
  selector: 'app-c2pa-manifest-view',
  standalone: true,
  imports: [],
  templateUrl: './c2pa-manifest-view.component.html',
  styleUrls: ['./c2pa-manifest-view.component.scss']
})
export class C2paManifestViewComponent implements OnInit {
  @Input() manifest: C2paManifest | null = null;

  ngOnInit() {
    // If you need to fetch C2PA data here, you can do so
  }
}
