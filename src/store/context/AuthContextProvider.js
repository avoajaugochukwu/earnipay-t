import React, { useState } from "react";

export const AuthContext = React.createContext({ username: '' });

function AuthProvider({ children}) {
  const [username, setUsername] = useState('')

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider