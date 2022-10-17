import axios from "axios"
import { GITCONNECT_USERNAME, GITCONNECT_PASSWORD } from "react-native-dotenv"
const gitconnect = axios.create({
  baseURL: "https://cbtcms.herokuapp.com/case/2830/",
  auth: { username: GITCONNECT_USERNAME, password: GITCONNECT_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
