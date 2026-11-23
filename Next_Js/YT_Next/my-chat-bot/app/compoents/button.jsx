"use client"

export default function Button() {
  return (
    <>
<button 
className="bg-blue-500 text-white px-4 py-2 rounded"
       
onClick={()=>{
        alert("i am a for client side render")
      }}
      >on click</button>
    </>
  );
}
