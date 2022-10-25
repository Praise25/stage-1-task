import classes from "./App.module.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className={classes["app-container"]}>
      <Profile />
    </div>
  );
}

export default App;
