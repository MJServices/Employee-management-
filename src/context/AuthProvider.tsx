import { createContext, useEffect, useState } from "react";
import { getData } from "../utils/localStorage";

interface UserData {
  admins: any;
  employees: any;
}

export const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setuserData] = useState<UserData | undefined>();
  useEffect(() => {
    setuserData(getData());
  }, []);
  console.log(userData);
  return (
    <AuthContext.Provider value={"Minhaj"}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
