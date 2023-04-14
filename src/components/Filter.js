import React from 'react'

export const Filter = (props) => {
  let filterData=props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function handleFilter(title){
    setCategory(title);

  }
  return (
    <div className='flex gap-6 w-fit mx-auto justify-between my-4'>
      {
        filterData.map((data)=>{
          return (
            <button onClick={()=>{handleFilter(data.title);}} key={data.id} 
            className={`text-xl font-semibold bg-yellow-200 px-6 py-1 rounded-md hover:bg-yellow-400 
            ${category===data.title ? " bg-yellow-400 outline-white outline-double" : " bg-yellow-200"}`}>
            {data.title}</button>
          );
        })
      }
    </div>
  )
}
