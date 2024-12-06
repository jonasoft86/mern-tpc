import { trpc } from "./trpc";

function App() {
  const { data , isLoading } = trpc.getUsers.useQuery();

  return (
    <>
      <div>{isLoading ? "Loading..." : JSON.stringify(data)}</div>
    </>
  );
}

export default App;
