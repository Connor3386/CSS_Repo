import './App.css'

function App() {

  const yourName = "Connor";

  const currentYear = 2026;


  return (

    <div>

      <h1>Hello, React!</h1>

      <h2>My name is {yourName}</h2>

      <p>I’m learning React in {currentYear}.</p>

      <p style = {{color: "blue"}}>This is my first React component!</p>

      <p>These are 3 things I'm excited to build in React:
        <ul>
          <li>Integrating APIs</li>
          <li>Map stuff</li>
          <li>More interactivity</li>
        </ul>
      </p>

      <p>Here's a puppy:</p>
      <img src={"src/assets/Puppy.jpeg"} />

    </div>

  );

}


export default App;
