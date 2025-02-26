import "./App.css";
import Containers from "./components/Containers";
import imagemSound from "./assets/imagemSond.webp";

function App() {
  const onClickChange = () => {};
  return (
    <>
      <Containers
        img={imagemSound}
        text="Come and discover who we are and what our work is"
        onClick={onClickChange}
        textButton="more"
      />
    </>
  );
}

export default App;
