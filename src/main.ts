import { appRoutes } from './app/app.routes';
import { enviroments } from './enviroments/enviroments';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';

// Esto se ha editado para modificar el modo de arranque de la aplicación 
// ( a partir de un componente y no de un módulo).
bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(appRoutes),
        importProvidersFrom(
            provideFirebaseApp(() => initializeApp(enviroments.firebase)),
            provideFirestore(() => getFirestore())
        )
    ]
}).catch((err) => console.log(err));
