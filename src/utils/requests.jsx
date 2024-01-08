import axios from "axios";
import { error, sucess } from "./toastify";

let axiosConfig = axios.create({
    baseURL: "http://localhost:3030/"
})

export const saveToLS = (value, key)=>{
    localStorage.setItem(key || "student", JSON.stringify(value))
}

export const getFromLS = (key)=>{
    let data = localStorage.getItem(key || "student")
}

export let signIn = async (data)=>{
    await axiosConfig.post("sign-in", data)
    .then(resp => {
        if(resp.data.payload){
            sucess(resp.data.message)
            saveToLS(resp.data.payload.student)
            saveToLS(resp.data.payload.token, "token")
        }
        else{
            error(resp.data.message)
        }
        
    })
    .catch(err => error(err.message))
}

export let signUp = async (data)=>{
    await axiosConfig.post("sign-up", data)
    .then(resp => {
        if(resp.data.payload){
            sucess(resp.data.message)
            saveToLS(resp.data.payload.student)
            saveToLS(resp.data.payload.token, "token")
        }
        else{
            error(resp.data.message)
        }
        
    })
    .catch(err => error(err.message))
}

export let createTransaction = async (data)=>{
    await axiosConfig.post("transaction/", data)
    .then(resp => {
        // console.log(resp);
        window.location.href = `/receipt/${resp.data.payload.ref}`
    })
    .catch(err => {
        console.log(err)
    })
}

export let getTransaction = async (ref)=>{
    let response = await axiosConfig.get(`transaction/${ref}`)
    response = response.data.payload;
    return response;
}