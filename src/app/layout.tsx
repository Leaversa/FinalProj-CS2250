import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { initializeFirebase } from "@/database/firebase";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Artistic",
    description: "Find. Create. Commission.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    initializeFirebase()
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
