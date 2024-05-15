import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosRenderComponent } from './juegos-render.component';

describe('JuegosRenderComponent', () => {
  let component: JuegosRenderComponent;
  let fixture: ComponentFixture<JuegosRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegosRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegosRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
