import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import AnchorTemporaryDrawer from "./pages/sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <AnchorTemporaryDrawer />
      <ListarTarefa />
    </div>
  );
}

export default App;
