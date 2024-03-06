
![MediCita](https://github.com/No-Country/s13-17-m-csharp/assets/159576872/bec9737a-b71c-404b-bd93-a4d380639cff)

# Introducción:


MediCita es una aplicación web y móvil diseñada para facilitar la reserva de citas médicas. Con Medicita, los usuarios pueden encontrar y reservar citas médicas de manera conveniente y eficiente. A diferencia de otras plataformas similares, Medicita es una solución genérica, lo que significa que no está limitada a un solo lugar o clínica específica. Los usuarios tienen la flexibilidad de cargar su propia clínica en la plataforma, ofreciendo así un amplio espectro de opciones para los pacientes.


## Características principales
* Registro de Clínicas
Los usuarios pueden registrar su clínica en la plataforma de Medicita, proporcionando información detallada sobre la ubicación, horarios de atención y servicios ofrecidos.

* Gestión de Especialidades
Una vez registrada la clínica, los usuarios pueden cargar las especialidades médicas con las que trabajan. Esto permite a los pacientes encontrar fácilmente especialistas en función de sus necesidades médicas específicas.

* Programación de Citas
MediCita permite a los usuarios administrar las agendas de los médicos disponibles en su clínica. Los pacientes pueden ver la disponibilidad de los médicos y reservar citas según su conveniencia.

* Registro
Los usuarios pueden registrarse, indicando su información de contacto, y también su historia clinica (enfermedades preexistentes, alergías)

* Agendar turno
MediCita permite al usuario filtrar según la especialidad deseada, ver la agenda disponible del médico, y reservar su turno.

* Cancelar turno
Tienen la posibilidad de cancelar su turno mediante la aplicación en caso de no poder asistir.


## Ventajas de Medicita
Flexibilidad: Al ser una plataforma genérica, Medicita ofrece a los usuarios la libertad de personalizar su experiencia según sus necesidades específicas.

Accesibilidad: Los pacientes pueden acceder a la plataforma desde cualquier dispositivo con conexión a internet, lo que les permite reservar citas médicas en cualquier momento y desde cualquier lugar.

Facilidad de Uso: La interfaz intuitiva de Medicita hace que sea fácil para los usuarios navegar y utilizar todas las funciones de la aplicación sin dificultad.<br>

## Demo
https://medicita.vercel.app/

## Estado
El proyecto se encuentra en un MVP inicial y funcional. Actualmente soporta el uso desde dispositivos móviles, tablets, laptops y PCs siendo completamente responsivo. Permite iniciar sesión y agendar un turno médico seleccionando el médico según la especialidad y su horario de atención, como así también cancelar el turno desde el menú del usuario. 


### Stack Tecnológico


| Rama          | Tecnologías                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UX/UI         | ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Front End     | ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Axios](https://axios-http.com/assets/logo.svg) |
| Back End      | ![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white) ![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Base de datos | ![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white) ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Deployment    | ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Others        | ![GIT](https://img.shields.io/badge/Git-fc6d26?style=for-the-badge&logo=git&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)                                                                                                                                                                                                                                             |
|               |


### Tecnologías

- Frontend:

  - **Javascript**
  - **React.Js**
  - **Vite Js**
  - **Tailwind**
  - **CSS Modules**

- Backend:

  - **Csharp**
  - **.Net**
  - **Entity framework**
  - **SQL**


### Dependencias Frontend:

- "sweetalert2": Para dar mensajes a los usuarios con estilos mas detallados mejorando la UX.
- "react-loader-spinner": Para efectos de loading al conectar a la BD y dar un mejora de UX.
- "react-router-dom" y "react-dom": Para establecer el enrutamiento y la navegación.
- "hamburger-react": Usado para el menú del usuario en responsive.
- "normalize.css": Para resetear el css y que los navegadores muestren todos los elementos de manera mas consistente.
- "js-cookie": Una API de JavaScript para manjear las cookies. 
- "prettier": Para dar formato al código.


### Backend:

[Deploy Backend](https://www.medicita.somee.com/swagger/index.html)

Es una API REST, arquitectura en capas, principios SOLID, interfaces, inyección de dependencias, repositories, DTO, reglas cors, token jwt authentication, Entity Framework code first, automapper, base de datos relacional sql server.


### Uso de la app-web

1. Clonar el repositorio desde GitHub.

```bash
   git clone https://github.com/No-Country/s13-17-m-csharp
```

2. Asegurarse que se está en la carpeta correcta para instala las dependencias.

```bash
    npm install
```

3. Ejecuta el proyecto.

```bash
    npm run dev
```


### Link al prototipo
https://www.figma.com/file/DMNbko4G9wOPV88WUGA8iD/S13-17-m-chsarp?type=design&node-id=0%3A1&mode=design&t=ClRfSeT7zRoXtQWf-1

## Equipo:

| Rol               | Nombre               | Redes                                                                                                                             |
| :---------------- | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `Front End`       | Kevin Noviello       | [![GitHub]](https://github.com/kjnoviello) [![linkedin]](https://www.linkedin.com/in/kevinjoelnoviello/)                               |
| `Front End`       | María Laura Carballo | [![GitHub]](https://github.com/LauryCGit) [![linkedin]](https://www.linkedin.com/in/maria-laura-carballo/)                                |
| `Front End`       | Diego Herrera        | [![GitHub]](https://github.com/Diegohrp) [![linkedin]](https://www.linkedin.com/in/diego-hp/) |
| `Front End`       | Nicolas Gonzalez     | [![GitHub]](https://github.com/nicolas355) [![linkedin]](https://www.linkedin.com/in/nicolas-gonzalez-68b5081b0/)                      |
| `Front End`       | Alejo Hurtado Testa  | [![GitHub]](https://github.com/Alejo-Hurtado-Testa) [![linkedin]](https://www.linkedin.com/in/alejo-hurtado-testa-53b14a216/)                      |
| `Back End`        | Rodrigo Kohnen       | [![GitHub]](https://github.com/rodrikohnen) [![linkedin]](https://www.linkedin.com/in/rodrigo-kohnen)                             |
| `UX/UI Designer`  | Andree Suarez        | [![behance]]() [![linkedin]]()           |
| `UX/UI Designer`  | Ailén Martinez       | [![Notion]](https://www.notion.so/ailenmartinez/Portfolio-Ail-n-Martinez-acd244c4c61e41189daf851bbbecbad5?pvs=4) [![linkedin]](https://www.linkedin.com/in/ail%C3%A9ndaniela-martinezrosica/)           |




[behance]: https://img.shields.io/badge/Behance-1769ff?style=for-the-badge&logo=behance&logoColor=white
[linkedin]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[github]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[Notion]: https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white
