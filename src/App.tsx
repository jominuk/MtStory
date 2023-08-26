import Route from "./shared/Route";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

function App() {
  library.add(fas);
  return <Route />;
}

export default App;
