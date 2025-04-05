import { useState } from "react";
import "./App.css";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Notifications from "./components/notifications/notifications";

function App() {
  const user = false;
  return (
    <>
      <div className="container">
        {user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )}
        <Notifications />
      </div>
    </>
  );
}

export default App;
