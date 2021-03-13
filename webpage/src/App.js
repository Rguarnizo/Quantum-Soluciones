import NavBar from "./Components/NavBar";
import FirstPage from "./Pages/FirstPage";
import "./Styles/app.scss";

function App() {
  return (
    <div className="fpage-container">
      <NavBar></NavBar>
      <FirstPage />
    </div>
  );
}

export default App;
