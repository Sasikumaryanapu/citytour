import React, { createContext, useContext, useState } from 'react'

const Authprovider=createContext()
const Authenication = ({children}) => {


    const [user,setUser]=useState(null)

    const login=(user)=>{
        setUser(user)
    }

    const logout=()=>{
        setUser(null)
    }

  return <Authprovider.Provider value={{user,login,logout}}>
    {children}
  </Authprovider.Provider >
}

export const useAuth=()=>{
    return useContext(Authprovider)
}
export default Authenication