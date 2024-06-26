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
        
        for( const categoriasVentas of listaCategoriasVentas) {
            template += `
                <div class="col-md-4 mb-4">
                <div class="card">
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
                    : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas`
                }</p>
                </div>
                </div>
                </div>
                

            `;
    }


categoriasContainerVentas.innerHTML = template

