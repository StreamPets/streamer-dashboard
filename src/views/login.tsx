function Login() {
    const oauth_url = import.meta.env.VITE_OAUTH_URL;

    const handleRedirect = () => {
        window.location.href = oauth_url + "/oauth?scopes=channel:bot";
    };

    return (
        <>
            <h1>StreamPets</h1>
            <button onClick={handleRedirect}>Login with Twitch</button>
        </>
    );
}

export default Login;
