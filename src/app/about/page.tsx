export default function About() {
    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images (1).jpg')" }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h1 className="text-white text-5xl font-bold">This is About Page</h1>
            <p className="text-white mt-4">Welcome to the About section of our beautiful flower garden website.</p>
          </div>
        </div>
    
    );
  }