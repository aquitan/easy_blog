import { Outlet } from "react-router";
import { Navbar } from "./components";

function App() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* NAVBAR */}
      <Navbar />
      <Outlet />
      {/* BREADCRUMPS */}
      {/* INTRODUCTION */}
      {/* FEATURED POSTS */}
      {/* POST LIST */}
    </div>
  );
}

export default App;
