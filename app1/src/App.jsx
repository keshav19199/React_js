import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {

  let name = "Keshav";
  let city = "Ahilyanagar";
  let skill = "Java Full Stack";
  let Collage="C.T. Bora Collage Shirur, Pune"

  return (
    <div>
      <h1>Hello {name}</h1>
      <h1>{Collage}</h1>

      <p>City : {city}</p>

      <p>Skill : {skill}</p>
    </div>
  );
}

export default App;