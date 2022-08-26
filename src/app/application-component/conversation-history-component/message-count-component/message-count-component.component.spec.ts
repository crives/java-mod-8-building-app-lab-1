import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCountComponentComponent } from './message-count-component.component';

describe('MessageCountComponentComponent', () => {
  let component: MessageCountComponentComponent;
  let fixture: ComponentFixture<MessageCountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageCountComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageCountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
