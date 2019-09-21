import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { SuspiciousBehavior } from "./pages/behavior";
import { RealTimeActivity } from "./pages/realtime";
import { SoftwareManagement } from "./pages/software";
// const imageSearch = import("./pages/imageSearch");
const showImageSearch = false;

const dynamicLoadImageSearch = () => {
  return <div>test</div>;
};
/*
if (showImageSearch) {
  ImageSearch = lazy(() => import("./pages/imageSearch"));
}

const loadImageSeach = () => (
  <Suspense fallback={<div>loading</div>}>
    <ImageSearch />
  </Suspense>
);
*/

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Suspicious Behavior</Link>
              </li>
              <li>
                <Link to="/realtime-activity/">Realtime Activity</Link>
              </li>
              <li>
                <Link to="/image-search/">Image Search</Link>
              </li>
              <li>
                <Link to="/software-management/">Software Management</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={SuspiciousBehavior} />
          <Route path="/realtime-activity/" component={RealTimeActivity} />
          <Route path="/image-search/" component={dynamicLoadImageSearch} />
          <Route path="/software-management/" component={SoftwareManagement} />
        </div>
      </Router>
    </div>
  );
}

export default App;
