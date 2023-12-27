import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableComponent } from './users-table.component';
import { UsersService } from '../users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import lodash from 'lodash';

describe('UsersTableComponent', () => {
  let component: UsersTableComponent;
  let fixture: ComponentFixture<UsersTableComponent>;
  let usersServiceMock: any;

  beforeEach(async () => {
    usersServiceMock = {
      getUsers: jest.fn(),
    };
    await TestBed.configureTestingModule({
      declarations: [UsersTableComponent],
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get data and set to filterdUsers', () => {
  //   const expectedRes = {
  //     id: 0,
  //     name: 'john doe',
  //     age: 28,
  //     company: 'Tech Innovators Inc.',
  //   };
  //   jest.spyOn(usersServiceMock, 'getUsers').mockReturnValue(of(expectedRes));
  //   fixture.detectChanges();
  //   expect(true).toBe(lodash.isEqual(component.filterdUsers[0], expectedRes));
  //   // expect(typeof component.filterdUsers[0] === 'object').toBe(true);
  // });
});
