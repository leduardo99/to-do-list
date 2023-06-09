import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { ThemesProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <ThemesProvider>
      <GlobalStyles />
      <TodoProvider>
        <RouterProvider
          router={router}
          fallbackElement={<div>Loading ...</div>}
        />
      </TodoProvider>
    </ThemesProvider>
  );
}

export default App;
