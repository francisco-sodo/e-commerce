
    const products = [
      {
        "id": 1,
        "name": "Estación de Policía",
        "category": "LEGO Ciudad",
        "price": 49.99,
        "img": "https://www.electricbricks.com/images/10278-1_i.jpg",
        "stock": 20,
        "description": "Construye tu propia estación de policía con este set LEGO. Incluye vehículos y figuras de policías."
      },
      {
        "id": 2,
        "name": "Halcón Milenario",
        "category": "LEGO Star Wars",
        "price": 129.99,
        "img": "https://m.media-amazon.com/images/I/81kmuPJ9IOL._AC_UF894,1000_QL80_.jpg",
        "stock": 15,
        "description": "Únete a la batalla galáctica con el icónico Halcón Milenario de Star Wars construido con ladrillos LEGO."
      },
      {
        "id": 3,
        "name": "Casa de Mia",
        "category": "LEGO Friends",
        "price": 39.99,
        "img": "https://i5.walmartimages.com.mx/mg/images/product-images/img_large/00067341928004l.jpg",
        "stock": 25,
        "description": "Crea y decora la casa de Mia con este set LEGO Friends. Incluye accesorios y figuras de amigos animales."
      },
      {
        "id": 4,
        "name": "Coche de Carreras",
        "category": "LEGO Technic",
        "price": 59.99,
        "img": "https://www.lego.com/cdn/cs/set/assets/blt89c76f709970a277/42039_alt1.jpg",
        "stock": 18,
        "description": "Experimenta la potencia de la ingeniería con este coche de carreras LEGO Technic. Funciona con mecanismos realistas."
      },
      {
        "id": 5,
        "name": "Granja Divertida",
        "category": "LEGO Duplo",
        "price": 29.99,
        "img": "https://bricksdirect.com.ar/92507-medium_default/lego-60346-granero-y-animales-de-granja.webp",
        "stock": 30,
        "description": "Introduce a los más pequeños al mundo de LEGO con esta granja divertida de bloques DUPLO."
      },
      {
        "id": 6,
        "name": "Templo del Fuego",
        "category": "LEGO Ninjago",
        "price": 79.99,
        "img": "https://http2.mlstatic.com/D_NQ_NP_856951-MLA42138978752_062020-O.webp",
        "stock": 12,
        "description": "Embárcate en aventuras ninja con el impresionante Templo del Fuego de LEGO Ninjago. ¡Desafía a tus enemigos!"
      },
      {
        "id": 7,
        "name": "Estación de Policía",
        "category": "LEGO Ciudad",
        "price": 49.99,
        "img": "https://www.electricbricks.com/images/10278-1_i.jpg",
        "stock": 20,
        "description": "Construye tu propia estación de policía con este set LEGO. Incluye vehículos y figuras de policías."
      },
      {
        "id": 8,
        "name": "Halcón Milenario",
        "category": "LEGO Star Wars",
        "price": 129.99,
        "img": "https://m.media-amazon.com/images/I/81kmuPJ9IOL._AC_UF894,1000_QL80_.jpg",
        "stock": 15,
        "description": "Únete a la batalla galáctica con el icónico Halcón Milenario de Star Wars construido con ladrillos LEGO."
      },
      {
        "id": 9,
        "name": "Casa de Mia",
        "category": "LEGO Friends",
        "price": 39.99,
        "img": "https://i5.walmartimages.com.mx/mg/images/product-images/img_large/00067341928004l.jpg",
        "stock": 25,
        "description": "Crea y decora la casa de Mia con este set LEGO Friends. Incluye accesorios y figuras de amigos animales."
      },
      {
        "id": 10,
        "name": "Coche de Carreras",
        "category": "LEGO Technic",
        "price": 59.99,
        "img": "https://www.lego.com/cdn/cs/set/assets/blt89c76f709970a277/42039_alt1.jpg",
        "stock": 18,
        "description": "Experimenta la potencia de la ingeniería con este coche de carreras LEGO Technic. Funciona con mecanismos realistas."
      },
      {
        "id": 11,
        "name": "Granja Divertida",
        "category": "LEGO Duplo",
        "price": 29.99,
        "img": "https://bricksdirect.com.ar/92507-medium_default/lego-60346-granero-y-animales-de-granja.webp",
        "stock": 30,
        "description": "Introduce a los más pequeños al mundo de LEGO con esta granja divertida de bloques DUPLO."
      },
      {
        "id": 12,
        "name": "Templo del Fuego",
        "category": "LEGO Ninjago",
        "price": 79.99,
        "img": "https://http2.mlstatic.com/D_NQ_NP_856951-MLA42138978752_062020-O.webp",
        "stock": 12,
        "description": "Embárcate en aventuras ninja con el impresionante Templo del Fuego de LEGO Ninjago. ¡Desafía a tus enemigos!"
      }
    ]




    export const getProducts = () => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(products)
            },500)
        })
    }

    export const getProductById = (productId) => {
      return new Promise((resolve)=>{
          setTimeout(()=>{
              resolve(products.find( prod => prod.id === productId))
          },500)
      })
  }
  