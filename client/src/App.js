import IntroPage from "./components/intro/intro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import NavigationBar from "./components/navigation/navigation";
import HorrorPage from "./components/horror/horror";
import ActionPage from "./components/action/action";
function App() {
  return (
    <div>
      <div className="rootBg">
        <NavigationBar />
        <IntroPage />
      </div>
      <div className="actionBg">
        <ActionPage />
      </div>
      <div className="horrorBg">
        <HorrorPage />
      </div>
    </div>
  );
}

export default App;
