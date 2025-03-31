import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("authToken")
    );

    const login = (newToken: string) => {
        localStorage.setItem("authToken", newToken);
        setToken(newToken);
    };

    const logout = () => {
        if (confirm("Deseja prosseguir?")) {
            localStorage.removeItem("authToken");
            setToken(null);
            alert("Usuário deslogado com sucesso!");
            location.reload();
        }
    };

    return (
        <AuthContext.Provider
            value={{ token, login, logout, isAuthenticated: !!token }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth precisa estar dentro do AuthProvider");
    return context;
};
