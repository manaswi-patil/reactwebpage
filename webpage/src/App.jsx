import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SignIn from './component/signin';
const App = () => {
  return (
    <>
    <div className='h-screen w-screen bg-gray-900'>
      <nav className=" flex justiy-between items-center px-6 ">
        <div className="ml-auto mt-4">
        <a href="/signin" target="_blank" rel="noopener noreferrer" className='text-white mr-4 text-gray-300'>Sign In</a>
          <button  className=' text-white mr-4 bg-blue-600 px-4 py-2 rounded'>Get Started
  <i className="fas fa-arrow-right  ml-2"></i>

          </button>
        </div>
      </nav>
<main className='flex container mx-auto px-6'>
  <div className='w-1/2 pl-6 mt-40'>
  <button className='text-white text-sm font-bold rounded-full bg-gray-800 px-4 py-2 mb-4 '>
  
  Launching Infinite Workspaces.<span className='text-blue-600'> Learn More. </span>
  <i className="fas fa-arrow-right text-blue ml-2"></i>
  </button>
    <h1 className='text-white text-5xl font-bold mb-4 '>Where the world builds <span className='italic'>software </span></h1>
    <p className='text-white mt-4 '>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results every time. </p>
<div className='flex gap-4 mt-4'>
  <button className='text-white text-sm font-bold rounded bg-blue-600 px-4 py-2 shadow-lg flex items-center'>
    Get Started for Free
  <i className="fas fa-arrow-right  ml-2"></i>
  </button>
  <button className='text-white text-sm font-bold rounded bg-gray-700  shadow-lg px-4 py-2'>Explore Docs</button>
</div>
  </div>
</main>
    </div>
    <div>
       <Router>
    <Routes>
    <Route path="/signin" element={<SignIn />} />
    </Routes>
  </Router>
    </div>
    </>
  )
}

export default App