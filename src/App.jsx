import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './componats/Main/Main'


export default function App() {



const router = createBrowserRouter([
  {path: "" , element: <Main/> , children:[
  ]}
])




  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}
