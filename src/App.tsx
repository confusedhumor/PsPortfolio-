import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useLenisScroll from './hooks/lenis'
import { Home } from './pages/home'
import Layout from './layout';
import { AboutMe } from './pages/aboutMe';
import { ContactMe } from './pages/contactMe';
import { ProjectsPage } from './pages/projects';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/contactme',
        element:<ContactMe/>
      },
      {
        path:'/aboutme',
        element:<AboutMe/>
      },
      {
        path:'/projects',
        element:<ProjectsPage/>
      }
    ]
  }
])


function App() {

  useLenisScroll();

  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App
