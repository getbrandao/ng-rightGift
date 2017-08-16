import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialKindsComponent } from './social-kinds.component';

describe('SocialKindsComponent', () => {
  let component: SocialKindsComponent;
  let fixture: ComponentFixture<SocialKindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialKindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialKindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
