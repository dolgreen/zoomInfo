import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { User } from '../../../models/user.model';
import { UsersService } from '../users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { take, tap, catchError, of } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent implements OnInit {
  sortOrder = '';
  filterdUsers: User[] = [];

  // for testing will rename
  displayedColumns = ['position', 'name', 'age', 'company', 'name(company)'];
  dataSource!: MatTableDataSource<User>;

  // error handling
  private errorMessage = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.initUserData();
  }

  initUserData(): void {
    this.usersService
      .getUsers()
      .pipe(
        take(1),
        tap((usersData: User[]) => {
          this.filterdUsers = usersData;
          this.dataSource = new MatTableDataSource(this.filterdUsers);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }),
        catchError((error) => {
          console.error('failed to get users', error);
          return of(undefined);
        })
      )
      .subscribe();
  }

  applyFilter(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.dataSource.filter = searchTerm.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
