import { useEffect, useState } from "react";
import { config } from "../config";

const HTTP_OK = 200;
const HTTP_UNAUTHORIZED = 401;

function useLogin() {
    const [loading, setLoading] = useState<boolean>(true);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const getUserData = async () => {
            const response = await fetch(config.API_URL + "/dashboard/login", {
                credentials: "include",
            });

            switch (response.status) {
            case HTTP_OK:
                setLoggedIn(true)
                break
            case HTTP_UNAUTHORIZED:
                setLoggedIn(false)
                break
            default:
                throw new Error(`invalid response from server: ${response.status}`)
            }

            setLoading(false);
        };

        getUserData();
    });

    return { loading, loggedIn };
}

export default useLogin;