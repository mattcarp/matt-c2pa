import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2paManifestViewComponent } from './c2pa-manifest-view.component';

describe('C2paManifestViewComponent', () => {
  let component: C2paManifestViewComponent;
  let fixture: ComponentFixture<C2paManifestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C2paManifestViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C2paManifestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
