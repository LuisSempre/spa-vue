import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  autoDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGE_SENDER_ID,
  vueAppId: process.env.VUE_APP_ID,
  vueAppMeasurementId: process.env.VUE_APP_MEASUREMENT_ID
})

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {
      return firebaseApp
    }
  })
}
