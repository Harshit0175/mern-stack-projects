import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Appcontext = createContext();

const Appprovider = ({ children }) => {
    const navigate = useNavigate();
    const  [user, setuser] = useState(false)
    const  [employer, setemployer] = useState(false)
    const [admin,setadmin]=useState(false)
    const value = { navigate, user, setuser, employer, setemployer, admin, setadmin };

    return (
        <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
    )
}
export default Appprovider;
export { Appcontext };
