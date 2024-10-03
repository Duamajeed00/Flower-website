import About from "./about/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <div>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-bold">This is Home Page</h1>
          <p className="text-white mt-4">Welcome to the flower garden website!</p>
        </div>
      </div>
      
      <About />
      <Contact />
</div>
  );
}
