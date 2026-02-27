import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Food from "./components/Food.jsx";
import Card from "./components/Card.jsx";
import About from "./components/About.jsx";
import Interest from "./components/Interest.jsx";
import Job from "./components/Job.jsx";

function App(){
  return(
    <div>
      <Header />
      <main>
        <h2>Welcome to my website!</h2>
        <Food />
        <Card />
        <About />
        <Interest />
        <Job />
      </main>
      <Footer />
    </div>
  );
}

export default App;