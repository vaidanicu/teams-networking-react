import logo from "./logo.svg";
import "./App.css";
import { AppFooter } from "./footer/components";
import AppHeader from "./header";
import { ContentWrapper } from "./main/ContentWrapper";

function App() {
  return (
    <>
      <AppHeader />;
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
