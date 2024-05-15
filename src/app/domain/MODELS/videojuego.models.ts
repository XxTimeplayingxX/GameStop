export interface videojuego {
    id: number
    nombre: string
    descripcion: string
    precio: number
    imagen: string
    desarrolladoraId: number
    datosLanzamiento: string
    nombreGenero: NombreGenero
    nombrePlataforma: NombrePlataforma
    nombreDesarrolladora: NombreDesarrolladora
    activo: boolean
  }
  
  export interface NombreGenero {
    id: number
    nombre: string
    descripcion: any
  }
  
  export interface NombrePlataforma {
    id: number
    nombre: string
    imagen: any
  }
  
  export interface NombreDesarrolladora {
    id: number
    nombre: string
    descripcion: any
    imagen: any
  }
  