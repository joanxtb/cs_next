import type { Metadata } from "next";
import Footer from "../components/globals/Footer";
import NavBar from "../components/globals/NavBar";

export const metadata: Metadata = {
    title: "Challenge Sports",
    description: "Description of the website",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>            
            <NavBar />
            {children}
            <footer className={`w3-container p-2 bg-black show`}>
                <Footer />
            </footer>
        </>
    );
}
