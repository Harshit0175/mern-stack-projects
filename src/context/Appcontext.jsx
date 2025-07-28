import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/assets";
import { jobs } from "../assets/assets";
import toast from "react-hot-toast";
import { companies } from "../assets/assets";
import { applicants } from "../assets/assets";


const Appcontext = createContext();

const Appprovider = ({ children }) => {
    const navigate = useNavigate();
    const  [user, setuser] = useState(false)
    const  [employer, setemployer] = useState(false)
    const [admin,setadmin]=useState(false)
     const [categoriesdata, setcategoriesdata] = useState([]);
     const [query, setquery] = useState("");
     const [isJobapplied, setisJobapplied] = useState(false);
     const [savedjobs, setsavedjobs] = useState([]);
     const [companydata, setcompanydata] = useState([]);
     const [applicant, setapplicant] = useState([]);
     const jobapplications=()=>{
        setapplicant(applicants)
     }
     const fetchcompanies=()=>{
        setcompanydata(companies)
     }
    const fetchcategories=()=>{
        setcategoriesdata(categories);
    }
    useEffect(() => {
        fetchcategories();
         fetchjobs();
         fetchcompanies();
         jobapplications();

    }, [])
 
    const jobsaved = (job)=>{
        setsavedjobs((prev) =>{;
        const exists =prev.find((item)=> item._id === job._id)
        if(exists){
            return prev
        }
        else{
            return[...prev,job]
        }
           
    })
        toast.success("Job saved successfully")

}

    
    const [jobdata, setJobdata] = useState([]);
    const fetchjobs = () => {
        setJobdata(jobs);
    }
   


    const value = { navigate, user, setuser, employer, setemployer, admin, setadmin, categoriesdata,jobdata,query, setquery , isJobapplied, setisJobapplied, savedjobs, jobsaved, companydata,setcompanydata ,applicant  };

    return (
        <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
    )
}
export default Appprovider;
export { Appcontext };
