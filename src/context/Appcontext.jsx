import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/assets";
import { jobs } from "../assets/assets";

const Appcontext = createContext();

const Appprovider = ({ children }) => {
    const navigate = useNavigate();
    const  [user, setuser] = useState(false)
    const  [employer, setemployer] = useState(false)
    const [admin,setadmin]=useState(false)
     const [categoriesdata, setcategoriesdata] = useState([]);
    const fetchcategories=()=>{
        setcategoriesdata(categories);
    }
    useEffect(() => {
        fetchcategories();

    }, [])
    const [jobdata, setJobdata] = useState([]);
    const fetchjobs = () => {
        setJobdata(jobs);
    }
    useEffect(() => {
     fetchjobs()
    }, [])


    const value = { navigate, user, setuser, employer, setemployer, admin, setadmin, categoriesdata,jobdata };

    return (
        <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
    )
}
export default Appprovider;
export { Appcontext };
