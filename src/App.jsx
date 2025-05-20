import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import HomePage from "./pages/HomePage";
import ClosetPage from "./pages/ClosetPage";
import OutfitsPage from "./pages/OutfitsPage";
import OutfitBuilder from "./pages/OutfitBuilderPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { AppContainer } from "./components/Layout/Layout.styled";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContainer data-component="AppContainer">
        <Router>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/closet" element={<ClosetPage />} />
              <Route path="/outfits" element={<OutfitsPage />} />
              <Route path="/outfit-builder" element={<OutfitBuilder />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
