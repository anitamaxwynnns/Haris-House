import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../supabase/supabase";

const initialState: { session: Session | null } = { session: null };
const AuthContext = createContext(initialState);

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ session: session }}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw Error("useAuth must be used within AuthProvider");
    }
    return context;
}
