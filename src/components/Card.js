import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';


export const Card = (props) => {
  const course =props.course;
  const detail = (course.description.length <= 100) ? course.description : course.description.substring(1, 100)+"...";
  const likedCourses=props.likedCourses;
  const setLikedCourses=props.setLikedCourses;
  
  function handleLiked(id){
    if(likedCourses.includes(id)) {
    setLikedCourses( () => likedCourses.filter((cid)=> (cid !==id) )  );
    toast.warning("like removed");
  }
  else {
      if(likedCourses.length === 0 ) {
        setLikedCourses([id]);
      }
      else {
        setLikedCourses(() => [...likedCourses, id]);
      }
      toast.success("Liked Successfully");
  }
  }


  return (
    <div className='w-[23%] border-yellow-300 border-solid border-2 rounded-md p-2 relative bg-white'>
        <img src={course.image.url} alt={course.image.alt} className=' rounded-md'></img>
        <div onClick={()=>{handleLiked(course.id)}} className=' absolute right-2 top-[8.5rem] w-8 h-8 bg-slate-100 border-solid border-black border-[1px] rounded-full flex justify-center items-center cursor-pointer'> 
          {
            likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
          }
        </div>
        
        <div>
            <h2 className=' w-[70%] text-xl text-purple-800 font-bold my-2'>{course.title}</h2>
        </div>
        <p className=' px-2 text-gray-600'>{detail}</p>
    </div>
  )
}
