import Top from "./components/top/Top";
import Mid from "./components/mid/Mid";
import Bottom from "./components/bottom/Bottom";
import "./styles/main.css";

function App() {
  return (
    <div className="bigAppDiv">
      <div className="supportDivApp">Deepesh</div>
      <div className="smallAppDiv">
        <Top />
        <Mid />
        <Bottom />
      </div>
      <div className="supportDivApp">Icon</div>
    </div>
  );
}

export default App;
