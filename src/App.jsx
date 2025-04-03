import Routers from "./Routers";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider
      autoHideDuration={3500}
      maxSnack={5}
      disableWindowBlurListener
      preventDuplicate
    >
      <Routers />
    </SnackbarProvider>
  );
}

export default App;
