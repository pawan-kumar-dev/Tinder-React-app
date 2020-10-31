import React from "react";
import "./App.css";
import Header from "./Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D3D3D3"
    }
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Switch>
            <Route path="/chats/:person">
              <Header backButton="/chats" />
              <ChatScreen />
            </Route>
            <Route path="/chats">
              <Header backButton="/" />
              <Chats />
            </Route>
            <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButton />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
