// components/AdSense.js
"use client"; // Make this a client component

import { useEffect } from "react";

export default function AdSense() {
    useEffect(() => {
        // Check if adsbygoogle is available and only push if it's the first time
        if (typeof window !== "undefined" && window.adsbygoogle) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("Adsense error", e);
            }
        }
    }, []); // Empty array ensures this runs only once

    return (
        <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4476899930876130"
            data-ad-slot="9711255599"
            data-ad-format="fluid"
            data-ad-layout-key="-fb+5w+4e-db+86"
        />
    );
}
