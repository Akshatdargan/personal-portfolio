import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Akshat Dargan",
    major: 'Information Technology',
    location: "Maharaja Agrasen Institute of Technology",
    tagline: "I'm a Frontend-Developer",
    subtagline: "JS | React | Data Structures & Algorithm",
    email: "Akshatdargan0@gmail.com",
    contactno: "+919555708182",
    availability: "Open to Work",
    skills: "React.js | JavaScript | Data Structures & Algorithm | Bootstrap " ,
    brand:
      "Passionate and dedicated Final year college student seeking a challenging internship opportunity in field of web-development.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
