import { useEffect, useState } from "react";
import { config } from "../config";

const HTTP_OK = 200;
const HTTP_UNAUTHORIZED = 401;

interface UserData {
    channel_id: string,
    overlay_id: string,
}

function useLogin() {
    const [loading, setLoading] = useState<boolean>(true);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [channelId, setChannelId] = useState<string>("");
    const [overlayId, setOverlayId] = useState<string>("");

    useEffect(() => {
        const getUserData = async () => {
            const response = await fetch(config.API_URL + "/dashboard/login", {
                credentials: "include",
            });

            switch (response.status) {
            case HTTP_OK:
                const data: UserData = await response.json()
                setChannelId(data.channel_id);
                setOverlayId(data.overlay_id);
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

    return { loading, loggedIn, overlayId, channelId };
}

export default useLogin;