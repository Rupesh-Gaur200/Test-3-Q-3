import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import RootLayout from './RootLayout'
import Contact from './Contact'
import About from './About'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'


const router =createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
     <Route path="/" element={<Home />} />
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/About' element={<About/>}/>



  </Route>
))
function App() {
 
  return  <RouterProvider router={router} />;
  

}

export default App
