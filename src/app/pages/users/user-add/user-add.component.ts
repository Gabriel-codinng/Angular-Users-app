import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/commmons/interfaces/user.interface';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  _userService = inject(UsersService)
  _router = inject(Router)

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    contactos: new FormArray([]),
  })

  submited(){
    this._userService.addUser({
      id: new Date().getTime().toString(),
      ...this.form.getRawValue(),
    } as User);
    this._router.navigate(['users'])
  }


  get contactos() {
    /*
      Un getter para retornar el control hijo del formulario y castearlo como tipo FormArray 
      y devolviendo los controles del nuevo tipo del hijo contactos.

      Se hace así porque el template HTML de Angular tiene problemas identificando 
      el tipo de funcionalidad en el bucles.
    */
    return (this.form.get('contactos') as FormArray).controls
  }

  addContactfield(){
    (this.form.get('contactos') as FormArray).push(
      new FormGroup({
        tipo: new FormControl('Número de teléfono', Validators.required),
        contacto: new FormControl('', Validators.required),
      })
    )
  }

}
