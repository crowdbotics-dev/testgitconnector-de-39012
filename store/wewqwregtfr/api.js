import axios from "axios"
import { WEWQWREGTFR_USERNAME, WEWQWREGTFR_PASSWORD } from "react-native-dotenv"
const wewqwregtfr = axios.create({
  baseURL: "https://cbtcms.herokuapp.com",
  auth: { username: WEWQWREGTFR_USERNAME, password: WEWQWREGTFR_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
