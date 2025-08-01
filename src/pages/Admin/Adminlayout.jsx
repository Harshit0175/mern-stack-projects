import { useContext } from "react";
import { Appcontext } from "../../context/Appcontext";
import toast from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";

const Adminlayout = () => {

  const {navigate,setadmin}=useContext(Appcontext)

    const sidebarLinks = [
        { name: "categories", path: "/admin" },
        { name: "add category", path: "/admin/add-category" },
        { name: "companies", path: "/admin/all-companies" },
        { name: "Applications", path: "/admin/all-applications  " },
        { name: "all users", path: "/admin/all-users" },
        { name: "jobs", path: "/admin/jobs" },

    ];

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
            <Link to='/employer'>
            <img width={100} src={assets.job1} alt=""  />
      </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! admin</p>
                    <button onClick={()=>{
                      setadmin(false);
                      navigate('/');
                      toast.success('logout sucessfully');
                    }} className=' bg-sky-600 text-white border rounded-full text-sm px-4 py-1 cursor-pointer'>Logout</button>
                </div>
            </div>
           <div className="flex">
             <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item, index) => (
                    <a href={item.path} key={index}
                        className={`flex items-center py-3 px-4 gap-3 
                            ${index === 0 ? "border-r-4 md:border-r-[6px] bg-sky-100 border-sky-600 text-sky-600"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                        {item.icon}
                        <p className="md:block hidden text-center">{item.name}</p>
                    </a>
                ))}
            </div>
            <Outlet/>
            </div>
        </>
    ); 
};
export default Adminlayout