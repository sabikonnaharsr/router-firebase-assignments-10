import React from "react";
import CourseDetails from "../CourseDetails/CourseDetails";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Courses = () => {
  return (
    <div>
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-3">
          <div class="grid grid-cols-3 gap-4">
          <CourseDetails />
          </div>
         
        </div>
        <div class="...">
          <LeftSideNav />
        </div>
      </div>
    </div>
  );
};

export default Courses;
