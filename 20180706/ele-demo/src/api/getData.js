
import axios from 'axios'

// ajax xhr

const http = axios.create({
    baseURL:'https://elm.cangdu.org',
    timeout:1000
})

//address 文本不能进行距离计算
//lbs lat lng

export const searchplace = (cityid,keyword) =>  new Promise((resolve,reject)=>{
    const url = `/v1/pois?type=search&city_id=${cityid}&keyword=${keyword}`
    http.get(url).then(res => resolve(res))
})

export const cityGuess  = ()=> fetch('https://elm.cangdu.org/v1/cities?type=guess')
//https://elm.cangdu.org/v1/cities?type=guess

export const hotcity = () => fetch('https://elm.cangdu.org/v1/cities?type=hot')

export const getcaptchas = () => new Promise((resolve,reject)=>{
    fetch('https://elm.cangdu.org/v1/captchas',{method:'POST',body:{},headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }}).then(res => res.json()).then(data => resolve(data)).catch(err => reject(err))
})

export const _getCityGuess =() => new Promise((resolve,reject)=>{
    fetch('https://elm.cangdu.org/v1/cities?type=guess',{method:'POST',body:{},headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }}).then(res => res.json()).then(data => resolve(data)).catch(err => reject(err))
})

export const _getHotcity =() => new Promise((resolve,reject)=>{
    fetch('https://elm.cangdu.org/v1/cities?type=hot',{method:'POST',body:{},headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }}).then(res => res.json()).then(data => resolve(data)).catch(err => reject(err))
})

export const currentcity = (cityid) => new Promise((resolve,reject) => {
    const url = `/v1/cities/${cityid}`
    http.get(url)
        .then(res =>{
            resolve(res)
        })
})

export const __cityGuess = () => new Promise((resolve, reject) => {
    fetch('https://elm.cangdu.org/v1/cities?type=guess')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
  
//   export const hotcity = () => new Promise((resolve, reject) => {
//     fetch('https://elm.cangdu.org/v1/cities?type=hot')
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err))
//   })
  
//   export const getcaptchas = () => new Promise((resolve, reject) => {
//     fetch('https://elm.cangdu.org/v1/captchas', {
//       method: 'POST',
//       body: {},
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(res => res.json())
//     .then(data => resolve(data))
//     .catch(err => reject(err))
//   })