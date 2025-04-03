import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
    token: string | null;
    userId: string | null;
    userName: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const decodeToken = (token: string) => {
    try {
        const base64Payload = token.split(".")[1];
        const payload = JSON.parse(atob(base64Payload));
        return payload.user ?? payload; // Retorna diretamente se não houver uma propriedade `user`
    } catch (error) {
        console.error("Erro ao decodificar token:", error);
        return null;
    }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("authToken"));
    const [userId, setUserId] = useState<string | null>(localStorage.getItem("userId"));
    const [userName, setUserName] = useState<string | null>(localStorage.getItem("userName"));

    const login = (token: string) => {
        localStorage.setItem("authToken", token);

        const userData = decodeToken(token);
        if (userData) {
            localStorage.setItem("userId", userData.id || "");
            localStorage.setItem("userName", userData.name || "");
            setUserId(userData.id || null);
            setUserName(userData.name || null);
        }

        setToken(token);
    };

    const logout = () => {
        if (confirm("Do you want to proceed?")) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("userId");
            localStorage.removeItem("userName");
            setToken(null);
            setUserId(null);
            setUserName(null);
            alert("User successfully logged out!");
            location.reload();
        }
    };

    return (
        <AuthContext.Provider value={{ token, userId, userName, login, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth needs to be inside the AuthProvider");
    return context;
};