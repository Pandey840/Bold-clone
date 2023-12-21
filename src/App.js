import Header from "./components/Header";
import SlideShow from "./components/SlideShow";
import imageLinks from "./data/imageLinks.json";

function App() {
  return (
    <>
      <Header />
      <SlideShow
        imageLinks={imageLinks}
        text1="INCREASE EARLY DETECTION AND AWARENESS OF DEMENTIA"
        text2="AS A MANAGEABLE CHRONIC CONDITION"
      />
    </>
  );
}

export default App;
