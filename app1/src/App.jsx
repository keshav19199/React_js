import './App.css';

import Header from './Header';
import Footer from './Footer';
import Random from './Component/Random';

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
<Random></Random>
<Random></Random>

    </div>
  );
}

export default App;