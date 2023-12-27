import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { User } from '../../models/user.model';
import { UsersService } from './../users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent implements OnInit {
  sortOrder: string = '';
  filterdUsers: User[] = [];

  displayedColumn = ['position', 'name', 'age', 'company'];
  dataSource!: MatTableDataSource<User>;

  // error handling
  errorMessage: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private usersService: UsersService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (usersData) => {
        this.filterdUsers = usersData;
        this.dataSource = new MatTableDataSource(this.filterdUsers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        this.errorMessage = error.statusText;
        this.snackBar.open('try checking your internet connection', '', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
      complete: () => console.log('completed'),
    });
  }

  applyFilter(event: Event): void {
    const serachTerm = (event.target as HTMLInputElement).value;
    this.dataSource.filter = serachTerm.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
