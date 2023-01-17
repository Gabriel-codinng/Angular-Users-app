import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { Routes } from '@angular/router';

export const userRoutes: Routes = [
    {path:'', title: 'User List', component: UserListComponent},
    {path:'edit', title: 'Edit List', component: UserEditComponent},
    {path:'add', title: 'Add List', component: UserAddComponent},
]