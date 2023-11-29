import "./App.css";
import { useHttpStatus } from "./useHttpStatus";

function App() {
  const { httpStatus, isLoading, isError } = useHttpStatus();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load.</p>;
  return <p>Status:{httpStatus.description}</p>;
}

export default App;
