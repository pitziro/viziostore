
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyB4mGAvdbg9h1lyw9rBNUnTLU6NV6enS-c",
    authDomain: "viziostore-65623.firebaseapp.com",
    projectId: "viziostore-65623"
});

var db = firebase.firestore();

var productos =[
{
    "Categoria": "gpu",
    "Fabricante": "NVIDIA",
    "Marca": "GALAX",
    "Modelo": "GALAX GEFORCE RTX 2070 SUPER 8GB GDDR6 EX",
    "Almacen": "3",
    "PrecioME": 689,
    "PrecioMN": 2535.52
    },
    {
    "Categoria": "gpu",
    "Fabricante": "NVIDIA",
    "Marca": "ASUS",
    "Modelo": "ASUS GEFORCE RTX 3070 KO 8GB GAMING GDDR6",
    "Almacen": "5",
    "PrecioME": 699,
    "PrecioMN": 2572.32
    },
    {
    "Categoria": "gpu",
    "Fabricante": "NVIDIA",
    "Marca": "MSI",
    "Modelo": "MSI RTX 3060TI VENTUS 3X OC 8GB GDDR6",
    "Almacen": "AGOTADO",
    "PrecioME": 749,
    "PrecioMN": 2756.32
    },
    {
    "Categoria": "gpu",
    "Fabricante": "NVIDIA",
    "Marca": "MSI",
    "Modelo": "MSI RTX 3070 GAMING TRIO 8GB GDDR6",
    "Almacen": "2",
    "PrecioME": 899,
    "PrecioMN": 3308.32
    },
    {
    "Categoria": "gpu",
    "Fabricante": "NVIDIA",
    "Marca": "ASUS",
    "Modelo": "ASUS NVIDIA TUF GAMING RTX 3080 10GB GDDR6X",
    "Almacen": "AGOTADO",
    "PrecioME": 1149,
    "PrecioMN": 4228.32
    },
    {
    "Categoria": "gpu",
    "Fabricante": "NVIDIA",
    "Marca": "MSI",
    "Modelo": "MSI GeForce RTX 3080 GAMING X TRIO 10GB GDDR6X",
    "Almacen": "20",
    "PrecioME": 1249,
    "PrecioMN": 4596.32
    },
    {
    "Categoria": "gpu",
    "Fabricante": "NVIDIA",
    "Marca": "MSI",
    "Modelo": "MSI RTX 3080 10GB GDDR6X OC",
    "Almacen": "CONSULTAR STOCK",
    "PrecioME": 1249,
    "PrecioMN": 4596.32
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "VIEWMAX",
    "Modelo": "VIEWMAX ENIGMAX RX 570 8GB",
    "Almacen": "AGOTADO",
    "PrecioME": 195,
    "PrecioMN": 717.6
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "ASROCK",
    "Modelo": "ASROCK PHANTOM GAMING D RADEON RX 570 8G",
    "Almacen": "3",
    "PrecioME": 238,
    "PrecioMN": 875.84
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "SAPPHIRE",
    "Modelo": "TARJ. VIDEO SAPPHIRE RADEON RX 570 8GB GDDR5 PULSE 256 BIT",
    "Almacen": "AGOTADO",
    "PrecioME": 239,
    "PrecioMN": 879.52
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "GIGABYTE",
    "Modelo": "GIGABYTE AMD RADEON RX 580 GAMING 8GB GDDR5",
    "Almacen": "9",
    "PrecioME": 289,
    "PrecioMN": 1063.52
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "ASUS",
    "Modelo": "ASUS AMD ROG STRIX RX 5500XT GAMING 8GB GDDR6",
    "Almacen": "8",
    "PrecioME": 298,
    "PrecioMN": 1096.64
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "MSI",
    "Modelo": "ASUS RADEON RX 5600XT ASUS DUAL EVO",
    "Almacen": "AGOTADO",
    "PrecioME": 389,
    "PrecioMN": 1431.52
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "ASROCK",
    "Modelo": "TARJETA VIDEO RADEON RX 5600XT CHALLENGER D 6GB OC GDDR6",
    "Almacen": "13",
    "PrecioME": 398,
    "PrecioMN": 1464.64
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "ASUS",
    "Modelo": "MSI RADEON RX 5600 XT MGAMING MX 6GB",
    "Almacen": "6",
    "PrecioME": 399,
    "PrecioMN": 1468.32
    },
    {
    "Categoria": "gpu",
    "Fabricante": "AMD",
    "Marca": "XFX",
    "Modelo": "GIGABYTE RADEON RX 5600 XT WINDFORCE OC, 6GB GDDR6",
    "Almacen": "3",
    "PrecioME": 439,
    "PrecioMN": 1615.52
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "T-FORCE VULCAN Z 4GB, DDR4 3000MHZ GRAY",
    "Almacen": "6",
    "PrecioME": 31,
    "PrecioMN": 114.08
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "Memoria T-Force Vulcan Z, 8GB, DDR4, 3200 MHz, CL-16",
    "Almacen": "4",
    "PrecioME": 49,
    "PrecioMN": 180.32
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "MEMORIA SODIMM T-FORCE VULCAN 8GB 3200MHZ DDR4 | RED",
    "Almacen": "9",
    "PrecioME": 49,
    "PrecioMN": 180.32
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "HYPERX",
    "Modelo": "MEM 8G HYPERX 3200GHZ DDR4",
    "Almacen": "5",
    "PrecioME": 53.5,
    "PrecioMN": 196.88
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "MEM. RAM TEAMGROUP T-FORCE DELTA DDR4 8GB/3200 NEGRO LED- RGB",
    "Almacen": "21",
    "PrecioME": 58,
    "PrecioMN": 213.44
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "GEIL",
    "Modelo": "MEMORIA RAM GEIL SUPER LUCE RGB 8GB DDR4 3200MHZ",
    "Almacen": "3",
    "PrecioME": 58,
    "PrecioMN": 213.44
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "RAM T-FORCE VULCAN Z 16GB, DDR4 3200MHZ",
    "Almacen": "7",
    "PrecioME": 79,
    "PrecioMN": 290.72
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "RAM DDR4 T-FORCE DELTA RGB 16GB 3200MHZ BLACK",
    "Almacen": "3",
    "PrecioME": 89,
    "PrecioMN": 327.52
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "CORSAIR",
    "Modelo": "MEMORIA CORSAIR DDR4 16GB 3200MHZ VENGEANCE LPX",
    "Almacen": "CONSULTAR STOCK",
    "PrecioME": 89,
    "PrecioMN": 327.52
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "MEMORIA T-FORCE DELTA RGB, 16GB, DDR4, 3000 MHZ, CL-16, 1.35V",
    "Almacen": "CONSULTAR STOCK",
    "PrecioME": 99,
    "PrecioMN": 364.32
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "RAM 16 GB (2*8)T-FORCE XCALIBUR RGB DDR4 3600MHZ",
    "Almacen": "41",
    "PrecioME": 119,
    "PrecioMN": 437.92
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "RAM DDR4 T-FORCE DELTA RGB 2X8GB 3200MHZ WHITE",
    "Almacen": "AGOTADO",
    "PrecioME": 125,
    "PrecioMN": 460
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "HYPERX",
    "Modelo": "MEMORIA 8GB DDR4 HYPERX PREDATOR BLACK RGB BUS 3600MHZ",
    "Almacen": "3",
    "PrecioME": 69,
    "PrecioMN": 253.92
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "MEMORIA 32GB DDR4 T-FORCE DELTA RGB 3200MHZ",
    "Almacen": "5",
    "PrecioME": 169,
    "PrecioMN": 621.92
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "KINGSTON",
    "Modelo": "Memoria Kingston HyperX Fury 16GB DDR4, 3200 MHz",
    "Almacen": "CONSULTAR STOCK",
    "PrecioME": 99,
    "PrecioMN": 364.32
    },
    {
    "Categoria": "RAM",
    "Fabricante": "",
    "Marca": "TEAMGROUP",
    "Modelo": "MEM. RAM TEAM GROUP T-FORCE XTREEM ARGB, 16GB KIT (8GB x2) DDR4 3600 MHZ",
    "Almacen": "7",
    "PrecioME": 189,
    "PrecioMN": 695.52
    },
    {
    "Categoria": "CPU",
    "Fabricante": "AMD",
    "Marca": "",
    "Modelo": "AMD RYZEN 3 3100 3.6GHZ 18MB 4CORE AM4",
    "Almacen": "3",
    "PrecioME": 144,
    "PrecioMN": 529.92
    },
    {
    "Categoria": "CPU",
    "Fabricante": "AMD",
    "Marca": "",
    "Modelo": "AMD RYZEN 5 3600 3.6GHZ 35MB 6CORE AM4",
    "Almacen": "9",
    "PrecioME": 259,
    "PrecioMN": 953.12
    },
    {
    "Categoria": "CPU",
    "Fabricante": "AMD",
    "Marca": "",
    "Modelo": "AMD RYZEN 5 5600X / 3.7GHZ UP TO 4.6GHZ / AM4",
    "Almacen": "8",
    "PrecioME": 389,
    "PrecioMN": 1431.52
    },
    {
    "Categoria": "CPU",
    "Fabricante": "AMD",
    "Marca": "",
    "Modelo": "AMD RYZEN 7 3700X 3.6GHZ-36.0MB | AM4",
    "Almacen": "9",
    "PrecioME": 419,
    "PrecioMN": 1541.92
    },
    {
    "Categoria": "CPU",
    "Fabricante": "AMD",
    "Marca": "",
    "Modelo": "AMD RYZEN 9 5900X 3.7GHZ 70MB 12CORE AM4",
    "Almacen": "CONSULTAR STOCK",
    "PrecioME": 699,
    "PrecioMN": 2572.32
    },
    {
    "Categoria": "CPU",
    "Fabricante": "INTEL",
    "Marca": "",
    "Modelo": "INTEL CORE I3 9100F 3.6GHZ-6.0MB | LGA 1151",
    "Almacen": "1",
    "PrecioME": 98,
    "PrecioMN": 360.64
    },
    {
    "Categoria": "CPU",
    "Fabricante": "INTEL",
    "Marca": "",
    "Modelo": "INTEL CORE I3 10100F 3.6GHZ/6MB LGA1200",
    "Almacen": "8",
    "PrecioME": 109,
    "PrecioMN": 401.12
    },
    {
    "Categoria": "CPU",
    "Fabricante": "INTEL",
    "Marca": "",
    "Modelo": "INTEL CORE I5 9400F 9.0MB-4.10GHZ- | LGA 1151",
    "Almacen": "1",
    "PrecioME": 189,
    "PrecioMN": 695.52
    },
    {
    "Categoria": "CPU",
    "Fabricante": "INTEL",
    "Marca": "",
    "Modelo": "INTEL CORE I5 10400F 2.90GHZ US",
    "Almacen": "AGOTADO",
    "PrecioME": 198,
    "PrecioMN": 728.64
    },
    {
    "Categoria": "CPU",
    "Fabricante": "INTEL",
    "Marca": "",
    "Modelo": "INTEL CORE I7 9700K 3.6GHZ-12.0MB | LGA 1151 | S/ COOLE",
    "Almacen": "4",
    "PrecioME": 479,
    "PrecioMN": 1762.72
    },
    {
    "Categoria": "CPU",
    "Fabricante": "INTEL",
    "Marca": "",
    "Modelo": "INTEL CORE I7 10700K 3.80GHZ US",
    "Almacen": "CONSULTAR STOCK",
    "PrecioME": 499,
    "PrecioMN": 1836.32
    },
    {
    "Categoria": "CPU",
    "Fabricante": "INTEL",
    "Marca": "",
    "Modelo": "INTEL CORE I9 10900KF 3.7 GHZ UP TO 5.3 GHZ | 1200",
    "Almacen": "10",
    "PrecioME": 643,
    "PrecioMN": 2366.24
    },
    {
    "Categoria": "CPU",
    "Fabricante": "INTEL",
    "Marca": "",
    "Modelo": "INTEL CORE I9 10900K 3.7 GHZ UP TO 5.3 GHZ | LGA 1200",
    "Almacen": "15",
    "PrecioME": 689,
    "PrecioMN": 2535.52
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "GIGABYTE",
    "Modelo": "MB GIGABYTE H310M-H 2.0 | LGA 1151",
    "Almacen": "1",
    "PrecioME": 69.86,
    "PrecioMN": 257.08
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "ASROCK",
    "Modelo": "MB ASROCK B365M PRO-4F | LGA 1151",
    "Almacen": "6",
    "PrecioME": 89,
    "PrecioMN": 327.52
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "MSI",
    "Modelo": "MB MSI B460M-A PRO DDR4 LGA 1200",
    "Almacen": "5",
    "PrecioME": 89,
    "PrecioMN": 327.52
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "ASUS",
    "Modelo": "MB ASUS ROG STRIX B460-H GAMING | LGA 1200",
    "Almacen": "1",
    "PrecioME": 182,
    "PrecioMN": 669.76
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "ASUS",
    "Modelo": "MB ASUS TUF Z390 PRO GAMING | LGA1151",
    "Almacen": "5",
    "PrecioME": 222,
    "PrecioMN": 816.96
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "ASUS",
    "Modelo": "MB ASUS TUF GAMING Z490-PLUS (WI-FI) | LGA 1200",
    "Almacen": "10",
    "PrecioME": 252,
    "PrecioMN": 927.36
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "ASUS",
    "Modelo": "MB ASUS PRIME Z490-A | LGA 1200",
    "Almacen": "2",
    "PrecioME": 282,
    "PrecioMN": 1037.76
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "GIGABYTE",
    "Modelo": "MB GIGABYTE Z490 AORUS ULTRA | LGA 1200",
    "Almacen": "9",
    "PrecioME": 427,
    "PrecioMN": 1571.36
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "ASROCK",
    "Modelo": "MB ASROCK Z490 TAICHI 4666MHZ+(OC) | LGA 1200",
    "Almacen": "4",
    "PrecioME": 498,
    "PrecioMN": 1832.64
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "ASUS",
    "Modelo": "MB ASUS Z390 ROG MAXIMUS XI FORMULA | LGA1151",
    "Almacen": "9",
    "PrecioME": 543,
    "PrecioMN": 1998.24
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "INTEL",
    "Marca": "ASUS",
    "Modelo": "MB ASUS PRIME H410M-E DDR4 LGA 1200",
    "Almacen": "10",
    "PrecioME": 86,
    "PrecioMN": 316.48
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "MSI",
    "Modelo": "MB ASROCK A320M-HDV R4.0 | AM4 AMD",
    "Almacen": "25",
    "PrecioME": 79,
    "PrecioMN": 290.72
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "GIGABYTE",
    "Modelo": "MB GIGABYTE B450M V2 DSH3 | AM4 AMD",
    "Almacen": "AGOTADO",
    "PrecioME": 95,
    "PrecioMN": 349.6
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "ASROCK",
    "Modelo": "MB ASROCK B450M PRO4-F | AM4 AMD",
    "Almacen": "20",
    "PrecioME": 99,
    "PrecioMN": 364.32
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "GIGABYTE",
    "Modelo": "MB GIGABYTE B550M DS3H | AM4 AMD",
    "Almacen": "5",
    "PrecioME": 148,
    "PrecioMN": 544.64
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "ASROCK",
    "Modelo": "MB ASROCK B550 PHATOM GAMING 4 (DDR4 4733+OC) | AM4 AMD",
    "Almacen": "7",
    "PrecioME": 153,
    "PrecioMN": 563.04
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "ASROCK",
    "Modelo": "MB ASROCK B550M STEEL LEGEND AM4 AMD",
    "Almacen": "1",
    "PrecioME": 188.76,
    "PrecioMN": 694.64
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "GIGABYTE",
    "Modelo": "MB GIGABYTE X570 GAMING X | AM4 AMD",
    "Almacen": "AGOTADO",
    "PrecioME": 229,
    "PrecioMN": 842.72
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "GIGABYTE",
    "Modelo": "MB ASUS ASUS PRIME X570-PRO | AM4 AMD",
    "Almacen": "CONSULTAR STOCK",
    "PrecioME": 239,
    "PrecioMN": 879.52
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "ASUS",
    "Modelo": "MB ASUS TUF GAMING X570-PLUS WI-FI | AM4 AMD",
    "Almacen": "CONSULTAR STOCK",
    "PrecioME": 289,
    "PrecioMN": 1063.52
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "ASUS",
    "Modelo": "MB ASUS ROG STRIX B550-E GAMING AMD RYZEN DDR4 AM4",
    "Almacen": "AGOTADO",
    "PrecioME": 329,
    "PrecioMN": 1210.72
    },
    {
    "Categoria": "MOBO",
    "Fabricante": "AMD",
    "Marca": "ASUS",
    "Modelo": "MB ASUS TUF GAMING X570-PLUS AMD RYZEN DDR4 AM4",
    "Almacen": "8",
    "PrecioME": 209,
    "PrecioMN": 769.12
    }    
]

productos.forEach(function(obj) {
    db.collection("productos").add({
        //id: obj.id,
        Categoria: obj.Categoria,
        Fabricante: obj.Fabricante,
        Marca: obj.Marca,
        Modelo: obj.Modelo,
        Almacen: obj.Almacen,
        PrecioME: obj.PrecioME,
        PrecioMN: obj.PrecioMN
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
