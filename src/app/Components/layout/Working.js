import React from 'react';

function Working() {
  return (
    <div id="working">
      <div className='h-auto'>
        <div className='text-white text-4xl text-center font-bold'>How we Work</div>
        <div className='flex p-5 mt-10'>
          <div className='flex-1'>
            <div className='pl-48'>
              <img src='one.png' className='justify-center w-14' alt=''/>
            </div> 
            <div className='pl-24 p-4 mt-3 text-left text-2xl font-semibold text-white'>Login into our website, head to projects, and click on add project.</div>
          </div>
          <div className='flex-1'>
            <div className='pl-48'>
              <img src='two.png' className='justify-center w-14' alt=''/>
            </div> 
            <div className='pl-24 p-4 font-semibold mt-3 text-left text-2xl text-white'>Add the GitHub repository link of your project.</div>
          </div>
          <div className='flex-1'>
            <div className='pl-48'>
              <img src='three.png' className='justify-center items-center w-14' alt=''/> 
            </div>
            <div className='pl-24 font-semibold mt-3 text-2xl p-4 text-left text-white'>Add the tasks to be tracked and leave it on Status Quo for tracking!</div>
          </div>  
        </div>
      <img src='Dashboard.png' alt='' className='rounded-lg'/>

      </div>
    </div>
  );
}

export default Working;
