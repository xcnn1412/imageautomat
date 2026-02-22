"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to homepage immediately on 404
        router.replace("/");
    }, [router]);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                background: "#0a0a0a",
                color: "#ffffff",
                fontFamily: "'Montserrat', sans-serif",
            }}
        >
            <p style={{ fontSize: "1rem", opacity: 0.6 }}>Redirecting...</p>
        </div>
    );
}
