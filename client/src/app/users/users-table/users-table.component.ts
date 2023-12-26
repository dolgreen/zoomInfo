import { User } from '../../models/user.model';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent implements OnInit {
  users: User[] = [];
  sortOrder: string = '';
  filterdUsers: User[] = [];
  page: number = 1;
  pageSize: number = 5;
  collectionSize: number = this.users.length;

  constructor(private usersService: UsersService) {
    this.refreshUsers();
  }

  // onTableSizeChange(event: any): void {
  //   if (event.target) {

  //     this.pageSize = event.target.value

  //   }
  // }

  refreshUsers() {
    this.filterdUsers = this.users
      .map((user, i) => ({ ...user }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((usersData) => {
      this.users = usersData;
      this.filterdUsers = usersData;
    });
  }

  applyFilter(event: Event): void {
    let serachTerm = (event.target as HTMLInputElement).value;
    serachTerm = serachTerm.toLowerCase();

    this.filterdUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(serachTerm)
    );

    this.sortUsers(this.sortOrder);
  }

  sortUsers(sortValue: string): void {
    this.sortOrder = sortValue;

    switch (this.sortOrder) {
      case 'ageLowHigh': {
        console.log('ageLowHigh');
        this.filterdUsers.sort((a, b) => a.age - b.age);

        break;
      }
      case 'ageHighLow': {
        console.log('ageHighLow');
        this.filterdUsers.sort((a, b) => b.age - a.age);
        break;
      }
      case 'byName': {
        console.log('byName');
        this.filterdUsers.sort((a, b) => a.name.localeCompare(b.name));
      }
    }
  }
}
