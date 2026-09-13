import "./App.css";



const  zadaci =  [ "kupiti mleko", "oprati auto", "vezbati react"
];

function App() {
  return (
    <>
      <h1>Todo Lista</h1>
      <ul>
        {zadaci.map((zadatak, index) => (
          <li key={index}>{zadatak}</li>
        ))}
      </ul>
    </>
  );
}


export default App;



