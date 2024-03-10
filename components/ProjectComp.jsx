import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

function ProjectComp() {
    
 
  return (
    <Card className="py-4 w-72 bg-[#1d242d] rounded-lg text-white ">
    <CardHeader className="pb-0  pt-2 px-4 flex-col space-y-2 items-start">
      <p className="text-tiny uppercase underline font-bold">Project Name</p>
      <small className="text-default-500">Lorem ipsum dolor sit Cum alias laborum hic officia quae fugit id quos molestias quas.</small>
      <h4 className="font-bold flex space-x-4 text-large">
        <p>Tech</p>
        <ul className="flex space-x-2 text-sm">
          <li className= " shadow-sm shadow-blue-300 bg-blue-400 flex justify-center items-center text-black px-3 rounded-md">React</li>
          <li className= " shadow-sm shadow-blue-300 bg-blue-400 flex justify-center items-center text-black px-3 rounded-md">React</li>
          <li className= " shadow-sm shadow-blue-300 bg-blue-400 flex justify-center items-center text-black px-3 rounded-md">React</li>
        </ul>
      </h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1572177812156-58036aae439c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D"
        width={270}
      />
    </CardBody>
  </Card>
    
//         <div  className='w-[300px] border-1 shadow-gray-500 shadow-md rounded-lg flex flex-col items-center justify-center'>
//           <div className="mx-4"> 

          
//            <img className=' mt-4 mb-2 shadow-sm shadow-gray-600 rounded-xl hover:shadow-gray-700 hover:shadow-md hover:scale-105 duration-700

// w-80' src="https://images.unsplash.com/photo-1572177812156-58036aae439c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D" alt="" />
//             </div>
//          <h4 className=' px-4 pb-2 text-white font-semibold font-mono text-2xl'>Project Name</h4>
//         <div className="flex space-x-2 px-4 text-gray-200 pb-2">
//             <p className="bg-gray-700 px-2 shadow-sm shadow-white">React</p>
//             <p className="bg-gray-700 px-2 shadow-sm shadow-white">Tailwind</p>
//             <p className="bg-gray-700 px-2 shadow-sm shadow-white">Redux</p>
//         </div>
//         <p className="px-4 text-sm text-gray-400 py-2 w-[300px] text-center"> amet consectetur adipisicing elit. veritatis provident possimus nemo corporis asperiores </p>
        
//         </div>
        
  
  )
}

export default ProjectComp