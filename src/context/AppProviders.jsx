import { AppProvider } from "./AppContext.jsx";
import { ThemeProvider } from "./ThemeContext.jsx";
import { TodoProvider } from "./TodoContext.jsx";

const AppProviders = ({ children }) => {
  return (
    <AppProvider>
      <TodoProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </TodoProvider>
    </AppProvider>
  );
};

export default AppProviders;
