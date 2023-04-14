import React from 'react'
import { Card } from './Card';
import { useState } from 'react';

export const Cards = (props) => {
  const courses=props.courses;
  const category=props.category;
  const [likedCourses, setLikedCourses] = useState([]);
  let allCourses=[];
  
  if(category==="All"){
    Object.values(courses).forEach((course)=>{
      course.forEach((courseData)=>{
        allCourses.push(courseData);
      })
    })
  }
  else{
    allCourses=courses[category];
  }
  
  return (
    <div className='flex flex-wrap gap-4 gap-y-6 w-[1200px] mx-auto justify-center py-[5rem]'>
      {
        allCourses.map((course)=>{
          return(
            <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
          );
        })
      }
    </div>
  )
}
