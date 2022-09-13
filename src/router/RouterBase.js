import React, { Suspense } from "react"
import { HashRouter, useRoutes } from 'react-router-dom'
import { routes } from './routes'
const Routes = () => {
    const elements = useRoutes(routes);
    return elements;
}
function RouterBase() {
    return (
        <HashRouter hashType='noslash' basename="/">
            <Suspense fallback='...Loading'>
                <Routes />
            </Suspense>
        </HashRouter>
    )
}

export default RouterBase