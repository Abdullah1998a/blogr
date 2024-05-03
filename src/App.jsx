import { featuresData } from "./data/featuresData.jsx";
import {
  Navbar,
  Header,
  FeatureOne,
  FeatureTwo,
  FeatureThree,
  Footer,
} from "./components";

export default function App() {
  return (
    <>
      <div className="banner">
        <div className="container mx-auto px-4 lg:px-16">
          <Navbar />
          <Header />
        </div>
      </div>
      <main>
        <FeatureOne
          title={featuresData[0].title}
          img={featuresData[0].img}
          content={featuresData[0].content}
        />
        <FeatureTwo
          img={featuresData[1].img}
          content={featuresData[1].content}
        />
        <FeatureThree
          img={featuresData[2].img}
          content={featuresData[2].content}
        />
      </main>
      <Footer />
    </>
  );
}
