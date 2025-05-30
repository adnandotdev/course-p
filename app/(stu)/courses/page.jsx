import React from "react";
import Card from "../components/CourseCard";
import { Typography } from "@mui/material";

const Courses = () => {
  return (
    <div className="mx-8">
      <Typography variant="h4" sx={{ mt: "16px", mx:"16px" }}><span className="text-cyan-500 font-bold">All Courses</span></Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 justify-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Courses;
