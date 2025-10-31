import { supabase } from "@/features/api/tasksService";
import type { User } from "@supabase/supabase-js";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface AuthInfo {
  email: string;
  password: string;
}
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  signIn: ({ email, password }: AuthInfo) => Promise<void>;
  signUp: ({ email, password }: AuthInfo) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user ?? null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser((prev) => {
        const newUser = session?.user ?? null;
        if (prev?.id === newUser?.id) return prev;
        return newUser;
      });
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) navigate("/app");
  }, [user]);

  async function signUpFn({ email, password }: AuthInfo) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw new Error(`${error}`);
    console.log(data);
  }

  async function signInFn({ email, password }: AuthInfo) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(`${error}`);
    setUser(data?.session?.user);
  }

  const signIn = useCallback(signInFn, []);
  const signUp = useCallback(signUpFn, []);
  const value = useMemo(() => ({ user, setUser, signIn, signUp }), [user]);
  return <AuthContext value={value}>{children}</AuthContext>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
