import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerstoWatchComponent } from './playerstowatch.component';

describe('PlayerstoWatchComponent', () => {
  let component: PlayerstoWatchComponent;
  let fixture: ComponentFixture<PlayerstoWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerstoWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerstoWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
