import "./App.css";
import Header from "./componets/Header";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    // <main className="flex justify-center gap-4 flex-col min-h-screen">
      <>
        <Header />

        {/* <Blog /> */}
        <BlogPost />      
      </>

    // </main>
  );
}



export default App;
