import Header from "./components/Header";
import SlideShow from "./components/SlideShow";
import imageLinks from "./data/imageLinks.json";
import WhoWeAre from "./components/WhoWeAre";

function App() {
  return (
    <>
      <Header />
      <SlideShow
        imageLinks={imageLinks}
        text1="INCREASE EARLY DETECTION AND AWARENESS OF DEMENTIA"
        text2="AS A MANAGEABLE CHRONIC CONDITION"
      />
      <WhoWeAre
        Headings="WHO WE ARE"
        Description1="NYU Grossman School of Medicine has been awarded funding from the Centers for Disease Control and Prevention, establishing it as a Public Health Center of Excellence (PHCOE) dedicated to improving early detection of dementia (EDD). One of three such PHCOEs funded under CDC’s Alzheimer’s Disease and Related Dementias initiative, the BOLD PHCOE on EDD is a national resource supporting implementation of evidence-based and evidence-informed public health strategies that increase capacity for early detection of dementia."
        Description2="The center is led by a team from the Division of Geriatric Medicine and Palliative Care and the Department of Population Health at NYU Langone focused on improving the lives of people affected by dementia. We, together with the PHCOE on Dementia Risk Reduction at the Alzheimer’s Association, the PHCOE on Dementia Caregiving at University of Minnesota, and over two dozen state and local initiatives, make up the CDC’s Building Our Largest Dementia (BOLD) Infrastructure for Alzheimer’s Act and National Healthy Brain Initiative."
        aboutImage={imageLinks.aboutImage}
      />
    </>
  );
}

export default App;
