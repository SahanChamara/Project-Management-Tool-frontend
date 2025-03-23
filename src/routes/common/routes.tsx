import SignIn from "@/components/auth/SignIn";
import { AUTH_ROUTES, BASE_ROUTE, PROTECTED_ROUTES } from "./routePaths";
import SignUp from "@/components/auth/SignUp";
import Home from "@/page/HomePage/Home";
import GoogleOAuthFailure from "@/page/auth/GoogleOAuthFailure";


export const authenticationRoutePaths = [
    {path: AUTH_ROUTES.SIGN_IN, element: <SignIn/>},
    {path: AUTH_ROUTES.SIGN_UP, element: <SignUp/>},
    {path: AUTH_ROUTES.GOOGLE_OAUTH_CALLBACK, element: <GoogleOAuthFailure/>},
];

export const protectedRoutePaths = [
    // {path: PROTECTED_ROUTES.WORKSPACE, element: <Workspacedashboard/>},
    /* {path: PROTECTED_ROUTES.TASKS, element: <Tasks/>},
    {path: PROTECTED_ROUTES.MEMBERS, element: <Members/>},
    {path: PROTECTED_ROUTES.SETTINGS, element: <Settings/>},
    {path: PROTECTED_ROUTES.PROJECT_DETAILS, element: <ProjectDetails/>}, */
];

export const baseRoutePaths = [
    {path: BASE_ROUTE.HOME_PAGE, elemets: <Home/>},
    // {path: BASE_ROUTE.INVITE_URL, elemets: <InviteUser/>},
];
