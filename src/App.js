import Articles from "./components/Articles";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="App">
      <Auth>
        {/*<Router>*/}
        {/*  <Routes>*/}
        {/*    <Route path="/*" component={Articles} />*/}
        {/*    /!*<Route exact path="/article" component={ViewArticle} />*!/*/}
        {/*    /!*<Route exact path="/login" component={Login} />*!/*/}
        {/*  </Routes>*/}
        {/*</Router>*/}
        <Articles />
      </Auth>
    </div>
  );
}

export default App;
