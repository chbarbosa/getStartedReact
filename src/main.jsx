import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Posts, {postsLoader} from './routes/Posts'
import PostDetails, {postDetailsLoader} from './routes/PostDetails'
import NewPost, { action as newPostAction } from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import './index.css'

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />,
    children: [
      {
        path: '/', 
        element: <Posts />, 
        loader: postsLoader,
        children: [
        {path: '/create-post', element: <NewPost />, action: newPostAction },
        {path: '/:id', element: <PostDetails />, loader: postDetailsLoader,}
      ]},
    ],
  },
  {path: '/test', element: <h1>Just a test!</h1>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
