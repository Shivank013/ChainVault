import React, { useContext, useState, useEffect } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; 
import { AppContext } from "../../context/AppContext";
import SidebarInstitute from "./SidebarInstitude";

function AddCourses() {
  const [courseNames, setCourseNames] = useState([]);
  const { addCourses, account, getCourses, setDashboardLoading } = useContext(AppContext);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      console.log(account);
      const response = await getCourses(account);
      console.log(response);
      setData(response);
      setDashboardLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setDashboardLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const add = async () => {
    console.log(courseNames);
    console.log(account);
    await addCourses(account, courseNames);
    setCourseNames([]);
  };

  const tagsArray = data.map((str, index) => (
    <div className=" flex py-2 px-4 m-4 rounded-lg font-semibold bg-orange-500 border-2 border-richblack-900 text-white" key={index}>
      <span>{str}</span>
    </div>
  ));

  return (
    <div className="pt-16 flex flex-col">
      <SidebarInstitute />
      <div className="pl-72 pt-7">
        <div>
          <h2 className="font-inter font-semibold ml-10 text-6xl m-2">Your Courses... </h2>
          <div className="flex ml-10 mt-10 flex-wrap rounded-xl bg-gray-500 mr-6 border-2 border-slate-300">{tagsArray}</div>
        </div>
        <div className=" mt-20">
          <h2 class=" mt-4 p-6 bg-slate-100 text-5xl text-center font-extrabold text-slate-500">Add <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Cources</span></h2>
          <TagsInput
            className=" w-2/5 scroll-ml-4 px-2 mt-16 pt-2 pb-1 border-slate-700 ml-10 rounded-md border-2 justify-center items-center"
            value={courseNames}
            onChange={(tags) => setCourseNames(tags)}
            onlyUnique={true}
            addOnBlur={true}
            inputProps={{ placeholder: "Add course" }}
          />
          {courseNames.length !== 0 ? (
            <button className=' bg-red-500 ml-10 text-xl px-4 py-1 text-white mt-4 rounded-xl gap-1 font-bold flex flex-row justify-center items-center' onClick={add}>
              Add Courses
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AddCourses;
