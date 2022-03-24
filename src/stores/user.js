// import { defineStore } from 'pinia'
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth'
// import { auth } from '../firebase/config'

// export const useUserStore = defineStore({
//   id: 'user',
//   state: () => ({
//     user: null
//   }),
//   getters: {
//     // doubleCount: (state) => state.counter * 2
//     setUser: (state, payload) => {
//       state.user = payload
//       console.log(state.user);
//     }
//   },
//   actions: {
    
//     async signUp(context, {email, password}) {
//       const response = await signInWithEmailAndPassword(auth, email, password) 
//       if (response) {
//         context.commit('setUser', response.user)
//       } else {
//         throw new Error('login failed');
//       }
//     },
//     async logOut(context) {
//       await signOut(auth)
//       context.commit('setUser', null)
//     }
//   }
// })
