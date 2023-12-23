import Header from "./components/Header";
import SlideShow from "./components/SlideShow";
import imageLinks from "./data/imageLinks.json";
import WhoWeAre from "./components/WhoWeAre";
import OurMission from "./components/OurMission";
import WeFacilitate from "./components/WeFacilitate";

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
      <OurMission
        Headings="OUR MISSION"
        Description1="Our Center’s overall mission is to make early detection of dementia routine practice nationwide. Detecting dementia before a crisis occurs and then acting on effective principles of care promotes better health and wellbeing for older adults and their families."
        Description2="Our work aims to build understanding of dementia as a manageable chronic condition through effective public health, clinical, and community initiatives. We strive to empower individuals and stakeholder groups to create systems that improve early detection and open the door to better, more comprehensive care."
        Description3="We synthesize evidence-based and evidence-supported strategies to improve detection and strive to identify what is needed to co-create solutions and promote change in stakeholder organizations and communities nationwide."
        Description4="We promote implementation of effective, sustainable, and collaborative public health, clinical, and community initiatives focused on improving early detection, reducing stigma, and advancing health equity. We strive to empower individuals and stakeholders to create pathways from increased detection evidence-based care by:"
        details1=" the process of detecting cognitive impairment and developing a comprehensive care pathway. Our early detection of dementia care pathway has 4 simple steps, with real-world examples of successful strategies implemented across the care ecosystem."
        details2=" the importance of integrating early detection into primary and other health care and community settings. By shortening the delay between detection of cognitive impairment and implementing appropriate care and support people with dementia can live well. In Partner Spotlights, we highlight innovative early detection work by leaders in this field and showcase concrete, actionable efforts adaptable to diverse settings."
        details3=" evidence-based practices and strategies to increase rates of early detection of dementia nationally. Our Center provides technical assistance to support capacity building, decision-making, and strategic planning. We also facilitate knowledge sharing across states and between organizations improving dementia detection, services, and supports. "
      />
      <WeFacilitate
        Headings="WE FACILITATE:"
        weFacilitate={imageLinks.weFacilitate}
        Description="We envision a world in which dementia is detected before a crisis occurs and in which early detection of dementia promotes better health and wellbeing of older adults, as well as their families and friends. We gather evidence about gaps and barriers to early detection and strategies for improvement that work. We seek to promote solutions through nationwide stakeholder collaboration."
      />
    </>
  );
}

export default App;
