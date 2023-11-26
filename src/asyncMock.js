
    const products = [
      {
        "id": 1,
        "name": "Estación de Policía",
        "category": "lego",
        "price": 49.99,
        "img": "https://www.electricbricks.com/images/10278-1_i.jpg",
        "stock": 20,
        "description": "Construye tu propia estación de policía con este set LEGO. Incluye vehículos y figuras de policías."
      },
      {
        "id": 2,
        "name": "Halcón Milenario",
        "category": "lego",
        "price": 129.99,
        "img": "https://m.media-amazon.com/images/I/81kmuPJ9IOL._AC_UF894,1000_QL80_.jpg",
        "stock": 15,
        "description": "Únete a la batalla galáctica con el icónico Halcón Milenario de Star Wars construido con ladrillos LEGO."
      },
      {
        "id": 3,
        "name": "Casa de Mia",
        "category": "lego",
        "price": 39.99,
        "img": "https://i5.walmartimages.com.mx/mg/images/product-images/img_large/00067341928004l.jpg",
        "stock": 25,
        "description": "Crea y decora la casa de Mia con este set LEGO Friends. Incluye accesorios y figuras de amigos animales."
      },
      {
        "id": 4,
        "name": "Coche de Carreras",
        "category": "lego",
        "price": 59.99,
        "img": "https://www.lego.com/cdn/cs/set/assets/blt89c76f709970a277/42039_alt1.jpg",
        "stock": 18,
        "description": "Experimenta la potencia de la ingeniería con este coche de carreras LEGO Technic. Funciona con mecanismos realistas."
      },
      {
        "id": 5,
        "name": "Granja Divertida",
        "category": "lego",
        "price": 29.99,
        "img": "https://bricksdirect.com.ar/92507-medium_default/lego-60346-granero-y-animales-de-granja.webp",
        "stock": 30,
        "description": "Introduce a los más pequeños al mundo de LEGO con esta granja divertida de bloques DUPLO."
      },
      {
        "id": 6,
        "name": "Templo del Fuego",
        "category": "lego",
        "price": 79.99,
        "img": "https://http2.mlstatic.com/D_NQ_NP_856951-MLA42138978752_062020-O.webp",
        "stock": 12,
        "description": "Embárcate en aventuras ninja con el impresionante Templo del Fuego de LEGO Ninjago. ¡Desafía a tus enemigos!"
      },

      //PLAYMOBIL   

      {
        "id": 7,
        "name": "Escuela",
        "category": "playmobil",
        "price": 39.99,
        "img": "https://m.media-amazon.com/images/I/81TorKFtVnL._AC_UF894,1000_QL80_.jpg",
        "stock": 15,
        "description": "Crea un entorno educativo con la escuela Playmobil City Life. Incluye aulas y figuras de estudiantes y profesores."
      },
      {
        "id": 8,
        "name": "Barco Pirata",
        "category": "playmobil",
        "price": 49.99,
        "img": "https://http2.mlstatic.com/D_NQ_NP_657743-MLA53314435630_012023-O.webp",
        "stock": 20,
        "description": "Navega por los mares con el Barco Pirata Playmobil Pirates. ¡Aventuras emocionantes te esperan en alta mar!"
      },
      {
        "id": 9,
        "name": "Castillo Encantado",
        "category": "playmobil",
        "price": 59.99,
        "img": "https://m.media-amazon.com/images/I/71ut04-HaFL._AC_SL1000_.jpg",
        "stock": 18,
        "description": "Explora el mágico Castillo Encantado de Playmobil Fairy con princesas, unicornios y secretos encantados."
      },
      {
        "id": 10,
        "name": "Fortaleza Medieval",
        "category": "playmobil",
        "price": 69.99,
        "img": "https://www.carype.com/frontend/img/upload/9240-playmobil-castillo-medieval-caballeros-del-leon.jpg",
        "stock": 22,
        "description": "Defiende el reino con la Fortaleza Medieval de Playmobil Knights. ¡Los caballeros y dragones están listos para la batalla!"
      },
      {
        "id": 11,
        "name": "Estación Espacial",
        "category": "playmobil",
        "price": 79.99,
        "img": "https://http2.mlstatic.com/D_NQ_NP_988108-MLA31642692005_072019-O.webp",
        "stock": 25,
        "description": "Viaja a las estrellas con la Estación Espacial Playmobil Space. Astronautas y naves espaciales incluidos."
      },
      {
        "id": 12,
        "name": "Equipo de Rescate",
        "category": "playmobil",
        "price": 34.99,
        "img": "https://www.abacus.coop/dw/image/v2/BDLM_PRD/on/demandware.static/-/Sites-AbacusMaster/default/dw02c61bda/images/large/1283996.47.jpg?sw=740",
        "stock": 30,
        "description": "Sé un héroe con el Equipo de Rescate Playmobil City Action. Incluye vehículos y figuras de rescate."
      },

      //MECCANO

      {
        "id": 13,
        "name": "Excavadora",
        "category": "meccano",
        "price": 59.99,
        "img": "https://m.media-amazon.com/images/I/81MK7r3bHFL._AC_UF894,1000_QL80_.jpg",
        "stock": 15,
        "description": "Construye una emocionante excavadora motorizada con este set Meccano. ¡Funciona con motores y control remoto!"
      },
      {
        "id": 14,
        "name": "Coche de Carreras",
        "category": "meccano",
        "price": 49.99,
        "img": "https://www.ociostock.com/productos/imagenes/img_299661_a44c8b5955e230a31309567e285173a0_20.jpg",
        "stock": 18,
        "description": "Diseña y ensambla tu propio coche de carreras con este set Meccano Erector. ¡Experimenta la velocidad y la ingeniería!"
      },
      {
        "id": 15,
        "name": "Robot Programable",
        "category": "meccano",
        "price": 79.99,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSin1jhkjo-5NTvKDcU--2c3AbUK6FR302Q&usqp=CAU",
        "stock": 20,
        "description": "Crea y programa un robot con este set Meccano Tech. ¡Aprende sobre robótica mientras te diviertes!"
      },
      {
        "id": 16,
        "name": "Estación Espacial",
        "category": "meccano",
        "price": 89.99,
        "img": "https://m.media-amazon.com/images/I/A1Jm4zZRnML.jpg",
        "stock": 15,
        "description": "Explora el espacio construyendo tu propia estación espacial con este set Meccano Space. ¡Con luces y sonidos realistas!"
      },
      {
        "id": 17,
        "name": "Set de Construcción",
        "category": "meccano",
        "price": 29.99,
        "img": "https://m.media-amazon.com/images/I/81Efr7WsvGL._AC_SL1500_.jpg",
        "stock": 25,
        "description": "Introduce a los más pequeños a la construcción con este set Meccano Junior. Fácil de ensamblar y desmontar."
      },
      {
        "id": 18,
        "name": "Avión de Combate",
        "category": "meccano",
        "price": 69.99,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2x7vktbrxBdkI2_F64KFjyoxoHW4-AJJFXAsy4plUWvH8pMHWYj-15wTw-fdhRtl8mbc&usqp=CAU",
        "stock": 22,
        "description": "Construye un avión de combate con este set Meccano Maker System. ¡Incluye detalles realistas y funciones interactivas!"
      }


    ]



//funcion para renderizar itemlistcontainer
    export const getProducts = () => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(products)
            },500)
        })
    }
    
//funcion para mostrar itemdetailcontainer
    export const getProductById = (productId) => {
      return new Promise((resolve)=>{
          setTimeout(()=>{
              resolve(products.find( prod => prod.id === productId))
          },500)
      })
  }

//funcion para filtrar items por categoria
export const getProductsByCategory = (categoryId)=>{
  return new Promise((resolve)=>{
      setTimeout( ()=>{
          resolve(products.filter( prod => prod.category === categoryId))
      },500)
  })

}