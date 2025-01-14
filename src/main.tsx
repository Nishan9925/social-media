import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Dashboard } from './pages/Profile/Dashboard'

const routes = createBrowserRouter([
  {
    path:'',
    element:<Signup/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/user',
    element:null
  },
  {
    path:'profile',
    element:<Profile/>,
    children:[
      {
        path:'',
        element:<Dashboard/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider  router={routes}>
    </RouterProvider>
)
