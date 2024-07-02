import { ReactNode, createContext, useContext, useState } from "react";

// Define the shape of your context state
interface StateContextType {
  user: any;
  token: string | null;
  setUser: (user: any) => void;
  setToken: (token: string | null) => void;
}

// Provide a default value for the context
const StateContext = createContext<StateContextType>({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {}
});

// Define the props for the provider component
interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState<any>(localStorage.getItem("user"));
  const [token, _setToken] = useState<string | null>(
    localStorage.getItem("_token")
  );

  const setToken = (token: string | null) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("_token", token);
    } else {
      localStorage.removeItem("_token");
    }
  };

  return (
    <StateContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
