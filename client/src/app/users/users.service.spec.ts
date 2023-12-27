import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environment/environment.development';
import { of, throwError } from 'rxjs';

describe('UsersService', () => {
  let service: UsersService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn(),
    };
    service = new UsersService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should test getUsers', (done) => {
    const res = 'test';
    const url = environment.apiUrl + '/users/getUsers';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getUsers().subscribe({
      next: (data) => {
        expect(data).toEqual(res);
        done();
      },
      error: (error) => console.log(error),
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('should test getUsers throw error', (done) => {
    const errorRes = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });
    const url = environment.apiUrl + '/users/getUsers';
    jest
      .spyOn(httpClientSpy, 'get')
      .mockReturnValue(throwError(() => errorRes));
    service.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        done();
      },
      error: (error) => {
        expect(error.message).toContain('404 Not Found');
        done();
      },
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });
});
