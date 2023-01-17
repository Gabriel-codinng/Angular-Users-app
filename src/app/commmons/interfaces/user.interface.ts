export interface User {
    id: string;
    nombre: string;
    apellidos: string;
    contactos: Contacto[];
}

interface Contacto {
    tipo: string;
    contacto: string;
}