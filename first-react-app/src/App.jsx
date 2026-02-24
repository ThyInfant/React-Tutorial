import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Rob" age="23" bio="I love comedy" />
      <Footer />
    </div>
  );
}

export default App;
