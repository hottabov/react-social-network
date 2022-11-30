import './App.scss';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      
      <Profile />
      
      <footer className="footer">
        footer
      </footer>

    </div>
  );
}

export default App;
