import "./App.css";
import { useHttpStatus } from "./useHttpStatus";

function App() {
  const { httpStatus, isLoading, isError } = useHttpStatus();

  if (isError) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;
  return <p>Status:{httpStatus.description}</p>;
}

export default App;
