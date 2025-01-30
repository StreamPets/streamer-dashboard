import Dashboard from "./views/dashboard";
import Login from "./views/login";

import useLogin from "./hooks/useLogin";

import "./App.css";

function App() {
    const { loading, loggedIn, overlayId, channelId } = useLogin();

    if (loading) {
        return <></>;
    }

    if (!loggedIn) {
        return <Login />;
    }

    return <Dashboard overlayId={overlayId} channelId={channelId} />;
}

export default App;
