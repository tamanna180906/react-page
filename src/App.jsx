
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./components/root/Layout"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
  </Route>
))


function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
