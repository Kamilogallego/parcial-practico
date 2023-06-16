const tiendasRopa = [
    ["Nike", "Armenia", "Ropa Deportiva", [100000, 1000000], ["Física", "No Virtual"]],
    ["Adidas", "Medellin", "Ropa Deportiva", [50000, 300000], ["Física", "Virtual"]],
    ["Gucci", "Bogota", "Ropa Mix", [2000000], ["No Física", "Virtual"]],
    ["KOAJ", "Pereira", "Ropa Clasica", [500000], ["Física", "No Virtual"]]
  ];
  
  const tiendasObjetos = tiendasRopa.map(tienda => {
    return {
      nombreTienda: tienda[0],
      ubicacion: tienda[1],
      categoria: tienda[2],
      precios: tienda[3],
      tipoTienda: {
        fisica: tienda[4][0],
        virtual: tienda[4][1]
      }
    };
  });
  
  console.log(tiendasObjetos);
  
  