
// Dependencias 
const firebase = require("firebase/app");
const firestore = require("firebase/firestore");
require('dotenv').config({path: '.env'})

// Initialize Cloud Firestore 
const firebaseConfig = {
    apiKey: process.env.LOAD_APP_APIKEY,
    authDomain: process.env.LOAD_APP_AUTHDOMAIN,
    projectId: process.env.LOAD_APP_PROJECTID
};

const app = firebase.initializeApp(firebaseConfig)
const getDataBase = firestore.getFirestore(app)

// M
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
    }
]

const itemCollection = firestore.collection(getDataBase, 'tiendita')

productos.forEach(function(obj) {
    
    const newItem = firestore.addDoc(itemCollection, {
        Categoria: obj.Categoria,
        Fabricante: obj.Fabricante,
        Marca: obj.Marca,
        Modelo: obj.Modelo,
        Almacen: obj.Almacen,
        PrecioME: obj.PrecioME,
        PrecioMN: obj.PrecioMN,
        urlFuente: obj.urlFuente
    })


    newItem
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
