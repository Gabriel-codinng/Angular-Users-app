import { FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { User } from 'src/app/commmons/interfaces/user.interface';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  user!: User
  _location = inject(Location)
  _userService = inject(UsersService)
  _router = inject(Router)

  form = new FormGroup(
    {
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      contactos: new FormArray([])
    }
  )

  submited() {
    this._userService.updateUser({
      id: this.user.id,
      ...this.form.getRawValue(),
    } as User)
    this._router.navigate(['users'])
  }

  ngOnInit() {
    this.user = (this._location.getState() as any).user as User

    if(this.user){
      this.setCurrentContact(this.user)
    }

  }

  // Casteo del tipo FormArray.
  get contactos() {
    return (this.form.get('contactos') as FormArray).controls
  }

  addContactfield() {
    (this.form.get('contactos') as FormArray).push(
      new FormGroup({
        tipo: new FormControl('Número de teléfono', Validators.required),
        contacto: new FormControl('', Validators.required),
      })
    )
  }

  setCurrentContact(user: User) {
    /**
     * patchValue compara un objeto con las misma estructura del FormGroup
     */

    this.form.patchValue(this.user as any)
    user.contactos.map(contacto => {
      const contactoForm = new FormGroup({
        tipo: new FormControl(contacto.tipo, Validators.required),
        contacto: new FormControl(contacto.contacto, Validators.required)
      });
      (this.form.get('contactos') as FormArray).push(contactoForm)
    })
  }

}
