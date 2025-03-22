import BaseLeyout from "@/layout/base.layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authenticationRoutePaths, baseRoutePaths, protectedRoutePaths } from "./common/routes";
import AuthRoute from "./auth.route";
import ProtectedRoute from "./protected.route";
import AppLayout from "@/layout/app.layput";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BaseLeyout />}>
                    {baseRoutePaths.map((route) => (
                        <Route key={route.path} path={route.path} element={route.elemets} />
                    ))}
                </Route>

                <Route path="/" element={<AuthRoute />} >
                    <Route element={<BaseLeyout />}>
                        {authenticationRoutePaths.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                    </Route>
                </Route>

                {/* Protected Route */}
                {/* <Route path="/" element={<ProtectedRoute />}>
                    <Route element={<AppLayout />}>
                        {protectedRoutePaths.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}

                    </Route>
                </Route> */}

                {/* all undefine Route */}
                {/* <Route path="*" element={<NotFound/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;