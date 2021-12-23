
import './App.css';

function App() {
  return (
    <div class="App">
      <h1>Mobile Operating System</h1>
     <ul>
     {["Blackberry","Android","iPhone","Windows"].map((e)=>(
        <li>{e}</li>
      ))}
     </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
      {["Samsung","HTC","Apple","Micromax"].map((e)=>(
        <li>{e}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;


