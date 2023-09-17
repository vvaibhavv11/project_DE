import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScantextifyComponent } from './scantextify.component';

describe('ScantextifyComponent', () => {
  let component: ScantextifyComponent;
  let fixture: ComponentFixture<ScantextifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScantextifyComponent]
    });
    fixture = TestBed.createComponent(ScantextifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
