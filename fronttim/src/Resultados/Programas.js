
import '../CSS/Color.css';

//Definición de colores por inteligencia y programa de interés 

export const getIntVerbal = (programa1,inteligencia1) =>  {
    if (programa1 === 'Comunicación social' || programa1 === 'Administración de Empresas (Administracion Dual)'||
    programa1 === 'Administracion Ambiental' || programa1 === 'Antropologia - Arqueologia' || programa1 === 'Bibliotecología' ||
    programa1 === 'Ciencia Política' || programa1 === 'Cine' || programa1 === 'Contaduria Pública - Tec. En Gestión Contable y Costos' ||
    programa1 === 'Derecho - Criminalística' || programa1 === 'Economía' || programa1 === 'Educación'|| 
    programa1 === 'Filosofía - Teología' || programa1 === 'Física' || programa1 === 'Formación Militar o Policial'|| 
    programa1 === 'Gastronomía' || programa1 === 'Negocios Internacionales, Comercio Exterior' || programa1 === 'Psicología'|| 
    programa1 === 'Relaciones Internacionales' || programa1 === 'Publicidad, Comunicación Publicitaria' || programa1 === 'Sociología'|| 
    programa1 === 'Trabajo Social'
    ){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Arquitectura' || programa1 === 'Artes Escenicas - Teatro - Danzas'|| programa1 === 'Lenguas Modernas, Literatura, Traducción' ||
         programa1 === 'Medicina' || programa1 === 'Mercadeo y Negocios Internacionales, Tec. Mercadeo y Venta' 
     ){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntMatematica = (programa1,inteligencia1) =>  {
    if (programa1 === 'Ingeniería informática'){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Arquitectura'){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntVisualEspacial = (programa1,inteligencia1) =>  {
    if (programa1 === 'Cine'){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Comunicación social'){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntNaturalista = (programa1,inteligencia1) =>  {
    if (programa1 === 'Administracion Ambiental'){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Geología'){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntkinesico_corporal = (programa1,inteligencia1) =>  {
    if (programa1 === 'Arquitectura'){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Cine' || programa1 === 'Comunicación social'){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntRitmicoMusical = (programa1,inteligencia1) =>  {
    if (programa1 === 'Música'){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Comunicación social'){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntIntraPersonal = (programa1,inteligencia1) =>  {
    if (programa1 === 'Pisoclogía'){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Cine'){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntInterPersonal = (programa1,inteligencia1) =>  {
    if (programa1 === 'Comunicación social'){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Cine'){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }