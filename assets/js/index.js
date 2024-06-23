/* Ventas */

const listaCategoriasVentas = [
    {   nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '4 Habitaciones |',
        baños: '4 Baños',
        costo: 5000,
        smoke: false,
        pets: false
    },
    {   nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road,Summit Peaks, CA 23456',
        habitaciones: '2 Habitaciones |',
        baños: '1 Baños',
        costo: 1.200,
        smoke: true,
        pets: true
    },
    {   nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: ' Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '3 Habitaciones |',
        baños: '3 Baños',
        costo: 4500,
        smoke: false,
        pets: true
    },
    {   nombre: 'Casa en el lago',
        src: './assets/img/casa_venta_1.jpeg',
        descripcion: 'Un oasis de paz,a corta distancia de la ciudad central',
        ubicacion: 'Bellinzona, Lake Maggiore, Suiza',
        habitaciones: '4 Habitaciones |',
        baños: '3 Baños',
        costo: 6500,
        smoke: true,
        pets: true
    }
    
]
const categoriasContainerVentas = document.querySelector('.cardVentas')
let template = ''
let counterVentas = 0
        for( const categoriasVentas of listaCategoriasVentas) {
           
            if (counterVentas < 3){

                template += `
                    <div class="col-md-4 mb-4">
                    <div class="card ">
                    <img src= ${categoriasVentas.src} class="card-img-top"alt="Imagen del departamento"/>
                    <div class="card-body">
                    <h5 class="card-title">${categoriasVentas.nombre}</h5>
                    <p class="card-text"> ${categoriasVentas.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${categoriasVentas.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${categoriasVentas.habitaciones}
                    <i class="fas fa-bath"></i> ${categoriasVentas.baños}</p>
                    <p><i class="fas fa-dollar-sign"></i> ${categoriasVentas.costo} </p>
                    <p class="text-danger"> ${categoriasVentas.smoke === true
                        ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar'
                        : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar`}</p>
                    <p class="text-danger"> ${categoriasVentas.pets === true
                        ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas`
                        : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas`}</p>
                    </div>
                    </div>
                    </div>`
                counterVentas ++;
            }
    }

     
categoriasContainerVentas.innerHTML = template



/* Arriendo */

const listaCategoriasArriendo = [
    {   nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: ' Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones |',
        baños: '2 Baños',
        costo: 2000,
        smoke: false,
        pets: true
    },
    {   nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '3 Habitaciones |',
        baños: '3 Baños',
        costo: 2500,
        smoke: true,
        pets: true
    },
    {   nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones |',
        baños: '2 Baños',
        costo: 2200,
        smoke: false,
        pets: false
    },   
    {   nombre: 'Casa de Campo',
        src: './assets/img/casa_venta_3.jpeg',
        descripcion: 'Una gran casa en una prestigiosa y tranquila localidad',
        ubicacion: 'Intragna,Ascona,Suiza',
        habitaciones: '6 Habitaciones |',
        baños: '6 Baños',
        costo: 4700,
        smoke: false,
        pets: true
    }
    
]


const categoriasContainerArriendo = document.querySelector('.cardAlquiler')
let templateArriendo = ''
let counterArriendo = 0


        for( const categoriasArriendo of listaCategoriasArriendo) {

           if (counterArriendo < 3){

                templateArriendo += `
                    <div class="col-md-4 mb-4">
                    <div class="card" >
                    <img src= ${categoriasArriendo.src} class="card-img-top"alt="Imagen del departamento"/>
                    <div class="card-body">
                    <h5 class="card-title">${categoriasArriendo.nombre}</h5>
                    <p class="card-text"> ${categoriasArriendo.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${categoriasArriendo.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${categoriasArriendo.habitaciones}
                    <i class="fas fa-bath"></i> ${categoriasArriendo.baños}</p>
                    <p><i class="fas fa-dollar-sign"></i> ${categoriasArriendo.costo} </p>
                    <p class="text-danger"> ${categoriasArriendo.smoke === true
                        ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar'
                        : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar`}</p>
                    <p class="text-danger"> ${categoriasArriendo.pets === true
                        ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas`
                        : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas`}</p>
                    </div>
                    </div>
                    </div>`
                counterArriendo ++;
           }
    }


categoriasContainerArriendo.innerHTML = templateArriendo