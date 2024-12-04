import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListingFormComponent } from './edit-listing-form.component';

describe('EditListingFormComponent', () => {
  let component: EditListingFormComponent;
  let fixture: ComponentFixture<EditListingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditListingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
