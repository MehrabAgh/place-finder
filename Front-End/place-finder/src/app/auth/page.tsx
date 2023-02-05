import { useRouter } from "next/router";
import React from "react";

export default function Auth() {
    const router = useRouter();

    React.useEffect(() => {
        router.push("/auth/login");
    }, []);
    return <div>auth</div>;
}
