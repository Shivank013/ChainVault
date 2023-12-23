import React, { useContext, useState, useEffect } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; 
import { AppContext } from "../../context/AppContext";
import SidebarInstitute from "./SidebarInstitude";
import { MdOutlineAddBox } from "react-icons/md";

function AddCourses() {
  const [courseNames, setCourseNames] = useState([]);
  const { addCourses, account, getCourses, result, dashboardLoading, setDashboardLoading } = useContext(AppContext);
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
    <div className="w-fit py-2 px-4 m-4 rounded-lg font-semibold bg-red-500 text-white border-1 border-black" key={index}>
      <span>{str}</span>
    </div>
  ));

  return (
    <div className="pt-16 flex flex-col">
      <SidebarInstitute />
      <div className="pl-80 pt-7">
        <div>
          <h2 className="font-inter text-6xl m-2">Your Courses... </h2>
          <div className="flex mt-10 overflow-y-scroll rounded-xl bg-slate-50 ml-4 w-3/4 border-2 border-slate-300">{tagsArray}</div>
        </div>
        <div>
          <h3 className="font-robo text-richblack-900 font-bold text-3xl text-start mt-10 ml-4 ">Add Courses</h3>
          <TagsInput
            className=" w-2/5 scroll-ml-4 px-4 py-2 border-slate-300 ml-4 rounded-md border-2 justify-center items-center"
            value={courseNames}
            onChange={(tags) => setCourseNames(tags)}
            onlyUnique={true}
            addOnBlur={true}
            inputProps={{ placeholder: "Add course names" }}
          />
          {courseNames.length !== 0 ? (
            <button className=' bg-red-500 text-xl px-4 py-1 ml-4 text-white mt-4 rounded-xl gap-1 font-bold flex flex-row justify-center items-center' onClick={add}>
              Add Courses
              {<MdOutlineAddBox className=" text-2xl"/>}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AddCourses;
