import React from 'react'
const About = React.lazy(() => import('pages/About'))
const Home = React.lazy(() => import('pages/Home'))
const NotFound = React.lazy(() => import('pages/NotFound'))

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '*',
        element: <NotFound />
    }
]