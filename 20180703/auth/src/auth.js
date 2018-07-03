

export default {
     loggeIn() {
        // localStorage.getItem('token')
        return localStorage.token
    },
    login(email,password,cb){
        setTimeout(()=>{
            if (email === "11@163.com" && password === "123")  {
                const token = Math.random().toString(36).substring(7)
                localStorage.setItem('token',token)
                cb(true)
                return  true 
            }
            else{
                cb(false)
                return  false 
            }
            
        },500)
        
    }
}

