// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "final-coder-house.firebaseapp.com",
  projectId: "final-coder-house",
  storageBucket: "final-coder-house.firebasestorage.app",
  messagingSenderId: "621877407655",
  appId: "1:621877407655:web:0f0db9d6bcb72b925a5082",
  measurementId: "G-NM1C0551T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

/*Funcion para cargar los datos a la db */
// import {collection,writeBatch,doc} from 'firebase/firestore';
// const obtenerProductos =  async () => {
//     return fetch('https://dummyjson.com/products')
//      .then(res => res.json())
//      .then(data => data.products);
//  }



// const subirProductos=  async () => {
//     const misProductos = await obtenerProductos();
//     const batch = writeBatch(db);
//     const productosRef = collection(db,'productos');

//     misProductos.forEach(producto => {
//         const nuevoDoc = doc(productosRef);
//         batch.set(nuevoDoc,producto);
//         console.log('Subiendo producto',producto);
//     })

//     try{
//         await batch.commit();
//         console.log('Productos subidos con exito'); 
//     }catch(e){
//         console.error('Error al subir productos',e);
//     }
//  }

//  subirProductos();
