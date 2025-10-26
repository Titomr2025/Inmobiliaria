

function mostrarAlertaFumar(permitido, nombrePropiedad) {
    if (permitido) {
        alert("✅ PERMITIDO FUMAR\n\nEn " + nombrePropiedad + " SÍ está permitido fumar.");
    } else {
        alert("🚫 NO SE PERMITE FUMAR\n\nEn " + nombrePropiedad + " está PROHIBIDO fumar.\n\n¡Importante: Esta es una propiedad libre de contaminación atmosferica !");
    }
}

function mostrarAlertaMascotas(permitido, nombrePropiedad) {
    if (permitido) {
        alert("🐾 MASCOTAS PERMITIDAS\n\nEn " + nombrePropiedad + " SÍ se permiten mascotas.\n\n¡Ideal para tu mascota!");
    } else {
        alert("🚫 NO SE PERMITEN MASCOTAS\n\nEn " + nombrePropiedad + " NO se permiten mascotas.\n\nEsta propiedad tiene restricciones para animales.");  
    }
}

const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa familiar en barrio residencial',
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
        descripcion: 'Casa espaciosa con jardín privado, perfecta para familias',
        ubicacion: '234 Family St, Suburbia, CA 34567',
        habitaciones: 5,
        costo: 3200,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Loft moderno en el centro',
        src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80',
        descripcion: 'Loft de diseño moderno con acabados de primera calidad',
        ubicacion: '890 Downtown Ave, City Center, CA 12345',
        habitaciones: 2,
        costo: 2800,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Villa exclusiva con piscina',
        src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
        descripcion: 'Villa de lujo con piscina privada y amplios jardines',
        ubicacion: '456 Elite Boulevard, Luxury Hills, CA 90210',
        habitaciones: 6,
        costo: 8500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Estudio moderno céntrico',
        src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
        descripcion: 'Estudio completamente equipado en zona comercial',
        ubicacion: '789 Business District, Metro City, CA 11111',
        habitaciones: 1,
        costo: 2200,
        smoke: true,
        pets: true
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '789 Quiet Lane, Suburb Residences, CA 67890',
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://img.holidu.com/images/18231c32-457f-4627-a0cf-8d5e9011dfda/l.avif',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Dúplex familiar con jardín',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkvQ4zazGruWURDFNEETnPROxIARZ6mOpTg&s',
        descripcion: 'Dúplex espacioso con jardín privado, ideal para familias',
        ubicacion: '321 Family Avenue, Residential Park, CA 54321',
        habitaciones: 4,
        costo: 2800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Ático con terraza panorámica',
        src: 'https://hips.hearstapps.com/hmg-prod/images/atico-con-terraza-azotea-plantas-vistas-1657185986.jpg?crop=1.00xw:1.00xh;0,0&resize=1400:*',
        descripcion: 'Ático moderno con terraza y vistas a toda la ciudad',
        ubicacion: '999 Skyline Terrace, Penthouse District, CA 99999',
        habitaciones: 3,
        costo: 3500,
        smoke: true,
        pets: false
    }
];

const ventaContainer = document.querySelector('#venta-cards');
if (ventaContainer) {
    let html = "";
    for (let propiedad of propiedades_venta.slice(0, 3)) {
        html += `<div class="col-md-4 mb-4">`;
        html += `<div class="card">`;
        html += `<img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">`;
        html += `<div class="card-body">`;
        html += `<h5 class="card-title">${propiedad.nombre}</h5>`;
        html += `<p class="card-text">${propiedad.descripcion}</p>`;
        html += `<p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>`;
        html += `<p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>`;
        html += `<p><i class="fas fa-dollar-sign"></i> $${propiedad.costo.toLocaleString()}</p>`;
        html += `</div>`;
        html += `</div>`;
        html += `</div>`;
    }
    ventaContainer.innerHTML = html;
}


const alquilerContainer = document.querySelector('#alquiler-cards');
if (alquilerContainer) {
    let html = "";

    for (let propiedad of propiedades_alquiler.slice(0, 3)) {
        html += `<div class="col-md-4 mb-4">`;
        html += `<div class="card">`;
        html += `<img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">`;
        html += `<div class="card-body">`;
        html += `<h5 class="card-title">${propiedad.nombre}</h5>`;
        html += `<p class="card-text">${propiedad.descripcion}</p>`;
        html += `<p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>`;
        html += `<p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>`;
        html += `<p><i class="fas fa-dollar-sign"></i> $${propiedad.costo.toLocaleString()}</p>`;
        html += `</div>`;
        html += `</div>`;
        html += `</div>`;
    }
    alquilerContainer.innerHTML = html;
}


const ventaListContainer = document.querySelector('#venta-list');
if (ventaListContainer) {
    let html = "";
    for (let propiedad of propiedades_venta) {
        html += `<div class="col-md-4 mb-4">`;
        html += `<div class="card">`;
        html += `<img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">`;
        html += `<div class="card-body">`;
        html += `<h5 class="card-title">${propiedad.nombre}</h5>`;
        html += `<p class="card-text">${propiedad.descripcion}</p>`;
        html += `<p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>`;
        html += `<p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>`;
        html += `<p><i class="fas fa-dollar-sign"></i> $${propiedad.costo.toLocaleString()}</p>`;


        if (propiedad.smoke) {
            html += `<p class="text-success" onclick="mostrarAlertaFumar(true, '${propiedad.nombre}')" style="cursor: pointer;">🚬 Permitido fumar</p>`;
        } else {
            html += `<p class="text-danger" onclick="mostrarAlertaFumar(false, '${propiedad.nombre}')" style="cursor: pointer;">🚫 No se permite fumar</p>`;
        }

        if (propiedad.pets) {
            html += `<p class="text-success" onclick="mostrarAlertaMascotas(true, '${propiedad.nombre}')" style="cursor: pointer;">🐾 Mascotas permitidas</p>`;
        } else {
            html += `<p class="text-danger" onclick="mostrarAlertaMascotas(false, '${propiedad.nombre}')" style="cursor: pointer;">🚫 No se permiten mascotas</p>`;
        }

        html += `</div>`;
        html += `</div>`;
        html += `</div>`;
    }
    ventaListContainer.innerHTML = html;
}

const alquilerListContainer = document.querySelector('#alquiler-list');
if (alquilerListContainer) {
    let html = "";

    for (let propiedad of propiedades_alquiler) {
        html += `<div class="col-md-4 mb-4">`;
        html += `<div class="card">`;
        html += `<img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">`;
        html += `<div class="card-body">`;
        html += `<h5 class="card-title">${propiedad.nombre}</h5>`;
        html += `<p class="card-text">${propiedad.descripcion}</p>`;
        html += `<p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>`;
        html += `<p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>`;
        html += `<p><i class="fas fa-dollar-sign"></i> $${propiedad.costo.toLocaleString()}</p>`;


        if (propiedad.smoke) {
            html += `<p class="text-success" onclick="mostrarAlertaFumar(true, '${propiedad.nombre}')" style="cursor: pointer;">🚬 Permitido fumar</p>`;
        } else {
            html += `<p class="text-danger" onclick="mostrarAlertaFumar(false, '${propiedad.nombre}')" style="cursor: pointer;">🚫 No se permite fumar</p>`;
        }

        if (propiedad.pets) {
            html += `<p class="text-success" onclick="mostrarAlertaMascotas(true, '${propiedad.nombre}')" style="cursor: pointer;">🐾 Mascotas permitidas</p>`;
        } else {
            html += `<p class="text-danger" onclick="mostrarAlertaMascotas(false, '${propiedad.nombre}')" style="cursor: pointer;">🚫 No se permiten mascotas</p>`;
        }

        html += `</div>`;
        html += `</div>`;
        html += `</div>`;
    }
    alquilerListContainer.innerHTML = html;
}


