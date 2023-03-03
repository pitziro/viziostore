
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID
});

var db = firebase.firestore();

var productos =[
    {
    "Categoria": "gpu",
    "Fabricante": "NVIDIA",
    "Marca": "ASUS",
    "Modelo": "ASUS GEFORCE RTX 3070 KO 8GB GAMING GDDR6",
    "Almacen": 5,
    "PrecioME": 699,
    "PrecioMN": 2572.32,
    "urlFuente": "https://cyccomputer.pe/34731-large_default/asus-geforce-rtx-3070-8gb-gddr6-256bits-ko-oc-pnko-rtx3070-o8g-gaming.jpg"
    },
    {
    "Categoria": "gpu",
    "Fabricante": "NVIDIA",
    "Marca": "MSI",
    "Modelo": "MSI RTX 3060TI VENTUS 3X OC 8GB GDDR6",
    "Almacen": 10,
    "PrecioME": 749,
    "PrecioMN": 2756.32,
    "urlFuente": "https://asset.msi.com/resize/image/global/product/product_1606829537a7c1043ecae4c427658234e19dcdf1e5.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
    },
    {
    "Categoria": "gpu",
    "Fabricante": "NVIDIA",
    "Marca": "MSI",
    "Modelo": "MSI RTX 3070 GAMING TRIO 8GB GDDR6",
    "Almacen": "AGOTADO",
    "PrecioME": 899,
    "PrecioMN": 3308.32,
    "urlFuente": "https://www.sercoplus.com/18606-large_default/vga-msi-nvidia-rtx-3070-gaming-x-trio-8g.jpg"
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "MSI",
    "Modelo": "ASUS RADEON RX 5600XT ASUS DUAL EVO",
    "Almacen": 9,
    "PrecioME": 389,
    "PrecioMN": 1431.52,
    "urlFuente": "https://www.asus.com/media/global/products/fkr8blxdwrptdxeu/P_setting_xxx_0_90_end_500.png"
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "ASROCK",
    "Modelo": "TARJETA VIDEO RADEON RX 5600XT CHALLENGER D 6GB OC GDDR6",
    "Almacen": 13,
    "PrecioME": 398,
    "PrecioMN": 1464.64,
    "urlFuente": "https://cyccomputer.pe/32599-large_default/asrock-radeon-rx-5600-xt-6gb-gddr6-192-bits-challenger-oc-pn90-ga1xzz-00uanf.jpg"
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "ASUS",
    "Modelo": "MSI RADEON RX 5600 XT MGAMING MX 6GB",
    "Almacen": 6,
    "PrecioME": 399,
    "PrecioMN": 1468.32,
    "urlFuente": "https://http2.mlstatic.com/D_NQ_NP_2X_826644-MPE44174979714_112020-F.webp"
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "XFX",
    "Modelo": "GIGABYTE RADEON RX 5600 XT WINDFORCE OC, 6GB GDDR6",
    "Almacen": 3,
    "PrecioME": 439,
    "PrecioMN": 1615.52,
    "urlFuente": "https://www.profesionalreview.com/wp-content/uploads/2020/01/o202001061617580463.png"
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "MEMORIA SODIMM T-FORCE VULCAN 8GB 3200MHZ DDR4 | RED",
    "Almacen": 9,
    "PrecioME": 49,
    "PrecioMN": 180.32,
    "urlFuente": "https://images-na.ssl-images-amazon.com/images/I/51AqFnChOjL._SX500_SY500_CR,0,0,500,500_.jpg"
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "HYPERX",
    "Modelo": "MEM 8G HYPERX 3200GHZ DDR4",
    "Almacen": 5,
    "PrecioME": 53.5,
    "PrecioMN": 196.88,
    "urlFuente": "https://xercom.com.pe/wp-content/uploads/2020/12/HX432C16FB3A8.jpg"
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "GEIL",
    "Modelo": "MEMORIA RAM GEIL SUPER LUCE RGB 8GB DDR4 3200MHZ",
    "Almacen": 3,
    "PrecioME": 58,
    "PrecioMN": 213.44,
    "urlFuente": "https://ovalo24.com.pe/wp-content/uploads/2020/09/3778.jpg"
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "CORSAIR",
    "Modelo": "MEMORIA CORSAIR DDR4 16GB 3200MHZ VENGEANCE LPX",
    "Almacen": "AGOTADO",
    "PrecioME": 89,
    "PrecioMN": 327.52,
    "urlFuente": "https://http2.mlstatic.com/D_NQ_NP_2X_776063-MPE43202523810_082020-F.webp"
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "HYPERX",
    "Modelo": "MEMORIA 8GB DDR4 HYPERX PREDATOR BLACK RGB BUS 3600MHZ",
    "Almacen": 3,
    "PrecioME": 69,
    "PrecioMN": 253.92,
    "urlFuente": "https://media.kingston.com/kingston/product/hx-product-memory-predator-rgb-ddr4-hx429c15pb3a8-1-zm-lg.jpg"
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "KINGSTON",
    "Modelo": "Memoria Kingston HyperX Fury 16GB DDR4, 3200 MHz",
    "Almacen": "CONSULTAR STOCK",
    "PrecioME": 99,
    "PrecioMN": 364.32,
    "urlFuente": "https://cyccomputer.pe/31314-large_default/memoria-16gb-ddr4-hyperx-fury-black-bus-3200mhz-pnhx432c16fb416.jpg"
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "MEM. RAM TEAM GROUP T-FORCE XTREEM ARGB, 16GB KIT (8GB x2) DDR4 3600 MHZ",
    "Almacen": 7,
    "PrecioME": 189,
    "PrecioMN": 695.52,
    "urlFuente": "https://www.sercoplus.com/15881-medium_default/mem-ram-team-group-t-force-xtreem-argb.jpg"
    },
    {
    "Categoria": "CPU",
    "Fabricante": "AMD",
    "Marca": "",
    "Modelo": "AMD RYZEN 5 5600X / 3.7GHZ UP TO 4.6GHZ / AM4",
    "Almacen": 8,
    "PrecioME": 389,
    "PrecioMN": 1431.52,
    "urlFuente": "https://www.infotec.com.pe/47506-large_default/procesador-amd-ryzen-5-5600x-100100000065box-37ghz-am4.jpg"
    },
    {
    "Categoria": "CPU",
    "Fabricante": "AMD",
    "Marca": "",
    "Modelo": "AMD RYZEN 7 3700X 3.6GHZ-36.0MB | AM4",
    "Almacen": 9,
    "PrecioME": 419,
    "PrecioMN": 1541.92,
    "urlFuente": "https://www.sercoplus.com/13028-large_default/procesador-amd-ryzen-7-3700x.jpg"
    },
    {
    "Categoria": "CPU",
    "Fabricante": "AMD",
    "Marca": "",
    "Modelo": "AMD RYZEN 9 5900X 3.7GHZ 70MB 12CORE AM4",
    "Almacen": "AGOTADO",
    "PrecioME": 699,
    "PrecioMN": 2572.32,
    "urlFuente": "https://cyccomputer.pe/30152-large_default/procesador-amd-ryzen-9-5900x-37ghz-70mb-12core-am4-pn100-100000061wof.jpg"
    },
    {
    "Categoria": "CPU",
    "Fabricante": "INTEL",
    "Marca": "",
    "Modelo": "INTEL CORE I3 9100F 3.6GHZ-6.0MB | LGA 1151",
    "Almacen": 1,
    "PrecioME": 98,
    "PrecioMN": 360.64,
    "urlFuente": "https://ae01.alicdn.com/kf/H1b4c778378ba441d814ea9132a41e1fbH/Intel-Core-i3-9100F-SRF7W-BO-de-la-computadora-de-la-PC-de-escritorio-procesador-LGA1151.jpg"
    },
    {
    "Categoria": "CPU",
    "Fabricante": "INTEL",
    "Marca": "",
    "Modelo": "INTEL CORE I9 10900KF 3.7 GHZ UP TO 5.3 GHZ | 1200",
    "Almacen": 10,
    "PrecioME": 643,
    "PrecioMN": 2366.24,
    "urlFuente": "https://cdn.shopify.com/s/files/1/0474/7051/0229/products/i9-10900K_11a6c5c1-7f60-4158-87b3-f44fa5aa5562.jpg"
    },
    {
    "Categoria": "CPU",
    "Fabricante": "INTEL",
    "Marca": "",
    "Modelo": "INTEL CORE I9 10900K 3.7 GHZ UP TO 5.3 GHZ | LGA 1200",
    "Almacen": 15,
    "PrecioME": 689,
    "PrecioMN": 2535.52,
    "urlFuente": "https://media.ldlc.com/r1600/ld/products/00/05/66/86/LD0005668608_2.jpg"
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "GIGABYTE",
    "Modelo": "MB GIGABYTE Z490 AORUS ULTRA | LGA 1200",
    "Almacen": 9,
    "PrecioME": 427,
    "PrecioMN": 1571.36,
    "urlFuente": "https://images-na.ssl-images-amazon.com/images/I/71JTXPsKGDL._AC_SY450_.jpg"
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "ASROCK",
    "Modelo": "MB ASROCK Z490 TAICHI 4666MHZ+(OC) | LGA 1200",
    "Almacen": 4,
    "PrecioME": 498,
    "PrecioMN": 1832.64,
    "urlFuente": "https://images-na.ssl-images-amazon.com/images/I/61J1l6bnUEL._AC_SL1000_.jpg"
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "ASUS",
    "Modelo": "MB ASUS Z390 ROG MAXIMUS XI FORMULA | LGA1151",
    "Almacen": 9,
    "PrecioME": 543,
    "PrecioMN": 1998.24,
    "urlFuente": "https://media.ldlc.com/r1600/ld/products/00/05/04/27/LD0005042731_2.jpg"
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "ASUS",
    "Modelo": "MB ASUS PRIME H410M-E DDR4 LGA 1200",
    "Almacen": 10,
    "PrecioME": 86,
    "PrecioMN": 316.48,
    "urlFuente": "https://ae01.alicdn.com/kf/H9e03071790184b12bf52fb9a6d1757c16.jpg_640x640Q90.jpg_.webp"
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "GIGABYTE",
    "Modelo": "MB ASUS PRIME X570-PRO | AM4 AMD",
    "Almacen": 12,
    "PrecioME": 239,
    "PrecioMN": 879.52,
    "urlFuente": "https://cyccomputer.pe/32568-large_default/mb-asus-prime-x570-pro-amd-ryzen-ddr4-am4-pcie-40-rgb-pn90mb11b0-m0aay0.jpg"
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "ASUS",
    "Modelo": "MB ASUS TUF GAMING X570-PLUS WI-FI | AM4 AMD",
    "Almacen": "AGOTADO",
    "PrecioME": 289,
    "PrecioMN": 1063.52,
    "urlFuente": "https://http2.mlstatic.com/D_NQ_NP_856171-MPE42978379176_082020-O.jpg"
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "ASUS",
    "Modelo": "MB ASUS ROG STRIX B550-E GAMING AMD RYZEN DDR4 AM4",
    "Almacen": 5,
    "PrecioME": 329,
    "PrecioMN": 1210.72,
    "urlFuente": "https://images-na.ssl-images-amazon.com/images/I/81Dn81WtyvL._AC_SL1500_.jpg"
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "ASUS",
    "Modelo": "MB ASUS TUF GAMING X570-PLUS AMD RYZEN DDR4 AM4",
    "Almacen": 8,
    "PrecioME": 209,
    "PrecioMN": 769.12,
    "urlFuente": "https://images-na.ssl-images-amazon.com/images/I/919hzfGXZeL._AC_SL1500_.jpg"
    }
]

// productos.forEach(function(obj) {
//     db.collection("productos").add({
//         Categoria: obj.Categoria,
//         Fabricante: obj.Fabricante,
//         Marca: obj.Marca,
//         Modelo: obj.Modelo,
//         Almacen: obj.Almacen,
//         PrecioME: obj.PrecioME,
//         PrecioMN: obj.PrecioMN,
//         urlFuente: obj.urlFuente
//     }).then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });

productos.forEach(function(obj) {
    db.collection("tiendita").addDoc({
        Categoria: obj.Categoria,
        Fabricante: obj.Fabricante,
        Marca: obj.Marca,
        Modelo: obj.Modelo,
        Almacen: obj.Almacen,
        PrecioME: obj.PrecioME,
        PrecioMN: obj.PrecioMN,
        urlFuente: obj.urlFuente
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
