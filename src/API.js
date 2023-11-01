import axios from "axios"
export const API = axios.create({baseURL:"https://v2.jokeapi.dev/joke/Any?lang=es"})