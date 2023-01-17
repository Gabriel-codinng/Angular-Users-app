import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, deleteDoc, doc, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { User } from '../commmons/interfaces/user.interface';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore) { }

  addUser(user: User) {
    // Creamos una referencia y creamos una colección en caso de que no exista.
    const userRef = collection(this.firestore, 'users')

    // Agregar un documento.
    return addDoc(userRef, user);
  }

  getUsers(filter = '') {
    const userRef = collection(this.firestore, 'users')
    let q = query(userRef)

    if(filter){
      q = query(userRef, where('nombre', '==', filter))
    }

    return collectionData(q) as unknown as Observable<User[]>
  }

  async updateUser(user: User){
    const userRef = collection(this.firestore, 'users')
    let q = query(userRef, where('id', '==' , user.id))

    // Retorna una promesa
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach(async document => {
      const docRef = doc(this.firestore, 'users', document.id)
      await updateDoc(docRef, {...user});
    })
    
  }

  async deleteUser(id: string){
    const userRef = collection(this.firestore, 'users')
    let q = query(userRef, where('id', '==', id))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.firestore, 'users', document.id)
      await deleteDoc(docRef)
    })
  }
}
