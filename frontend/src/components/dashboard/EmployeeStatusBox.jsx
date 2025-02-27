import React from 'react'

function EmployeeStatusBox() {
  return (
       

        <div className='flex justify-evenly py-4'>
             <div className='bg-blue-400 w-[15%] py-8 rounded-sm pl-3 text-white flex flex-col'>
                <span className='text-3xl text-extrabold'>0</span>
                <span className='text-xl text-bold'>New Task</span>
            </div>

            <div className='bg-green-400 w-[15%] py-8 rounded-sm pl-3 text-white flex flex-col'>
                <span className='text-3xl text-extrabold'>0</span>
                <span className='text-xl text-bold'>New Task</span>
            </div>

            <div className='bg-yellow-400 w-[15%] py-8 rounded-sm pl-3 text-white flex flex-col'>
                <span className='text-3xl text-extrabold'>0</span>
                <span className='text-xl text-bold'>New Task</span>
            </div>

            <div className='bg-red-400 w-[15%] py-8 rounded-sm pl-3 text-white flex flex-col'>
                <span className='text-3xl text-extrabold'>0</span>
                <span className='text-xl text-bold'>New Task</span>
            </div>
        </div>
  )
}

export default EmployeeStatusBox