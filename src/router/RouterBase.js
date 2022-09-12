import React, { Suspense } from "react"
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './routes'
const Routes = () => {
    const elements = useRoutes(routes);
    return elements;
}
function RouterBase() {
    return (
        <BrowserRouter>
            <Suspense fallback='...Loading'>
                <Routes />
            </Suspense>
        </BrowserRouter>
    )
}

export default RouterBase