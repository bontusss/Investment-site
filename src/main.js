import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCME-6viLXxY7ALZhwrIsbjQpSoug12dmU",
  authDomain: "invest-f3691.firebaseapp.com",
  projectId: "invest-f3691",
  storageBucket: "invest-f3691.appspot.com",
  messagingSenderId: "701615516644",
  appId: "1:701615516644:web:37eb8d2a8a624b3c62b5f1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// initialize cloud firestore
export const db = getFirestore(firebaseApp)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

