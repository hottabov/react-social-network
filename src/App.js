import './App.scss';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Chats from "./components/Chats/Chats";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";


function App(props) {

  return (

    <div className="App">
      <Header/>
      <div className="container">
        <div className="mainContainer">
          <Nav/>
          <div className="content">
            <Routes>
              <Route path="/" element={
                <Profile
                  postData={props.state.profilePage.postData}
                  // state={props.state.profilePage}
                  addPostToState={props.addPostToState}
                />}
              />
              <Route path="/profile" element={
                <Profile
                  postData={props.state.profilePage.postData}
                  // state={props.state.profilePage}
                  addPostToState={props.addPostToState}
                />}
              />
              <Route path="/messages/*" element={
                <Chats
                  participantsData={props.state.chatsPage.participantsData}
                  messagesData={props.state.chatsPage.messagesData}
                />
              }/>
              <Route path="/news" element={<News/>}/>
              <Route path="/music" element={<Music/>}/>
              <Route path="/settings" element={<Settings/>}/>
            </Routes>
          </div>
        </div>
      </div>
      <footer className="footer">
        footer
      </footer>
    </div>


  );
}

export default App;
