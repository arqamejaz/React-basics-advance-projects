import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 text-black rounded-xl mb-4">
        Practicing Props
      </h1>
      <div className="flex gap-4">
        <Card username="M Arqam" btnText="Read More" />
        <Card username="Ejaz" btnText="Continue Reading" />
      </div>
    </>
  );
}

export default App;
