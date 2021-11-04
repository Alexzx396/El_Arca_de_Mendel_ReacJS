const cataloge = [
    
    { id:"0001", 
    categorie:"Exoticas",
    title:"Adenium Obesum", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/adenium/adenium-obesum-2.jpg", 
    stock:20,

},

    { id:"0002", 
    categorie:"Cactus", 
    title:"Aloe Mix", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/aloe/aloe-juvenna.jpg", 
    stock:20,
 },

    { id:"0003", 
    categorie:"Cactus",
    title:"Astrophytum",
    price:5.999,  
    pictureUrl:"../assets/Cactus/astrophytum/astrophytum1.jpg", 
    stock:20 },

    { id:"0004", 
    categorie:"Cactus",
    title:"Crassula",  
    price:5.999, 
    pictureUrl:"../assets/Cactus/Crassulaceae/crassula-hybr-buddhas-temple.jpg", 
    stock:20 },
    
    { id:"0005", 
    categorie:"Cactus",
    title:"Echeveria", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/Echeveria/echeveria-agavoides-cv-romeo.jpg", 
    stock:20},

    { id:"0006", 
    categorie:"Cactus",
    title:"Echinocactus", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/echinocactus/echinocactus-grusonii-xl (2).jpg",
    stock:20 },
    
    { id:"0007", 
    categorie:"Cactus",
    title:"Echinocactus Visnaga", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/Echinocactus visnaga/Echinocactus_viznaga_14422_l.jpg", 
    stock:20 },
    
    { id:"0008", 
    categorie:"Cactus", 
    title:"Echinocereus Mix",  
    price:5.999, 
    pictureUrl:"../assets/Cactus/Echinocereus Mix/echinocereus-laui-sonora-chihuahua-mexiko.jpg", 
    stock:20 },
    
    { id:"0009", 
    categorie:"Cactus",
    title:"Euphoria Enopla", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/Euphorbia enopla/euphorbia-enopla (2).jpg",
    stock:20 },
    
    { id:"0010", 
    categorie:"Cactus",
    title:"Euphoria Inermis", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/Euphorbia inermis/euphorbia-inermis (2).jpg", 
    stock:20 },

    { id:"0011", 
    categorie:"Cactus",
    title:"Fenestraria", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/fenestraria/fenestraria-aurantiaca2.jpg", 
    stock:20 },

    { id:"0012", 
    categorie:"Suculentas", 
    title:"Frailea Castenea", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/Frailea castenea/frailea-castanea (1).jpg", 
    stock:20 },

    { id:"0013", 
    categorie:"Suculentas", 
    title:"Frailea pumila F.", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/Frailea pumila f. rubrispina/Frailea_pumila_f._rubrispina_15668_l.jpg",
    stock:20},

    { id:"0014", 
    categorie:"Suculentas",  
    title:"Frithia pulchra", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/Frithia pulchra/frithia-pulchra (2).jpg", 
    stock:20 },

    { id:"0015", 
    categorie:"Suculentas", 
    title:"Gymnocalicium Mix", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/gymnocalycium/gymnocalycium-4.jpg", 
    stock:20 },

    { id:"0016", 
    categorie:"Suculentas",  
    title:"Gymnocalycium Quehlianum", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/Gymnocalycium quehlianum/gymnocalycium-quehlianum (3).jpg", 
    stock:20 },

    { id:"0017", 
    categorie:"Suculentas", 
    title:"Lapidaria Margaretae", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/Lapidaria margaretae/lapidaria-margaretae.jpg", 
    stock:20 },

    { id:"0018", 
    categorie:"Suculentas", 
    title:"Lithops Aucampie", 
    price:5.999, 
    pictureUrl:"../assets/Cactus/Lithops aucampiae/lithops-aucampiae-cv-rudesheim-rubi-s-785.jpg", 
    stock:20 },

];

const GetFetchList = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(cataloge);
        reject('400 not found')
    }, 2000)
    
});


GetFetchList
.then((resolve) => console.log(resolve))
.catch (error => alert("Error:", error))
.finally (() => console.log('Catalogo ejecutado correctamente'))

export default GetFetchList