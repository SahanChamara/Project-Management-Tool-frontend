import useWorkspaceId from "@/hooks/use-workspace-id";
import { createContext, useContext, useEffect } from "react";

// conetxt shape
type AuthContextType = {
    workspaceId: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,

}) => {
    const workspaceId = useWorkspaceId();

    useEffect(() => { });

    return (
        <AuthContext.Provider
            value={{
                workspaceId,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// eslient disable next line react-refresh / only export component
export const useAuthContext = () => {
    const conetxt = useContext(AuthContext);
    if (!conetxt) {
        throw new Error("useCurrnt User Context must be used with in a authprovider");
    }
    return conetxt;
};

