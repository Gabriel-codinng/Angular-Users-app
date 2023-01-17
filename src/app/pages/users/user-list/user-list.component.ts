import { User } from './../../../commmons/interfaces/user.interface';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, of } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  _userService = inject(UsersService)
  users$!: Observable<User[]>
  searcher = new FormControl()
  _router = inject(Router)

  ngOnInit() {
    // this._userService.getUsers().subscribe(res => console.log(res))
    this.users$ = this._userService.getUsers()
    
    // Para limitar el número de petiociones pasado un determinado tiempo (MEJORA DEL RENDIMIENTO).
    this.searcher.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(search => {
      if(search){
        this.users$ = this._userService.getUsers(search)
      }else{
        this.users$ = this._userService.getUsers()
      }
    })
  }

  userAdd(){
    this._router.navigateByUrl('users/add')
  }

  editUser(user: User){
    this._router.navigateByUrl('users/edit', {state: { user }})
  }

  deleteUser(user: User){
    if(confirm(`¿Esta seguro de querer borrar a ${user.nombre + ' ' + user.apellidos} de la base de datos?`)){
      this._userService.deleteUser(user.id)
    }
  }
}
