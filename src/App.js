import "./style.min.css";

import Header from "./components/layout/Header";

import Landing from "./components/routes/landing";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Landing />
    </div>
  );
};

export default App;
