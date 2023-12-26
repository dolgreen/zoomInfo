import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './users-table/users-table.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UsersTableComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    NgbPaginationModule,
  ],
  providers: [],
  exports: [UsersTableComponent],
})
export class UsersModule {}
