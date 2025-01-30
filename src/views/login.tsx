import { config } from "../config";

function Login() {
    const handleRedirect = () => {
        window.location.href = config.OAUTH_URL + "/oauth?scopes=channel:bot";
    };

    return (
        <>
            <h1>StreamPets</h1>
            <button onClick={handleRedirect}>Login with Twitch</button>
        </>
    );
}

export default Login;
