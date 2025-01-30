import { useState } from "react";

import Dashboard from "./views/dashboard";
import Login from "./views/login";

import "./App.css";

function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    return loggedIn ? <Dashboard /> : <Login />;
}

export default App;
