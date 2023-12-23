import React, { useContext, useState, useEffect } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; 
import { AppContext } from "../../context/AppContext";
import SidebarInstitute from "./SidebarInstitude";

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
          <h2>Your Courses: </h2>
          <div className="flex">{tagsArray}</div>
        </div>
        <div>
          <h3 className="-ml-6">Add Courses</h3>
          <TagsInput
            className="w-11/12 px-4 py-2 rounded-md border-2 justify-center items-center"
            value={courseNames}
            onChange={(tags) => setCourseNames(tags)}
            onlyUnique={true}
            addOnBlur={true}
            inputProps={{ placeholder: "Add course names" }}
          />
          {courseNames.length !== 0 ? (
            <button className='mt-7 rounded-md text-l font-semibold bg-[#ef5b5b] text-white border-2 p-2' onClick={add}>
              Add Courses
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AddCourses;
