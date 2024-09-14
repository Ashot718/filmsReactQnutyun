import React from 'react'



function Loading() {
  return (
    <div className=' w-full h-[100vh] fixed bg-black flex justify-center items-center  z-[999]'  >
<button
  class="inline-block rounded-full border-2 border-red-500 text-red-500 hover:border-red-600 hover:bg-red-400 hover:bg-opacity-10 hover:text-red-600 focus:border-red-700 focus:text-red-700 active:border-red-800 active:text-red-800 dark:border-red-300 dark:text-red-300 dark:hover:hover:bg-red-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
  type="button"
>
  <div
    role="status"
    class="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  >
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >
      Loading...
    </span>
  </div>
  Loading
</button>
    </div>
    
  )
}

export default Loading
