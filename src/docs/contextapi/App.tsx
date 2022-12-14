import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignUp } from './pages/SignUp';
import { ShowData } from './pages/ShowData';

import { ContextProvider } from "./contexts/context";

const App = () => {
  return (
    <ContextProvider>
        <BrowserRouter>
            <h1>Título da página</h1>
            Tema: {state.theme.status}
            <hr />
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/exibir" element={<ShowData />} />
            </Routes>
        </BrowserRouter>
    </ContextProvider>
  );
}

export default App;