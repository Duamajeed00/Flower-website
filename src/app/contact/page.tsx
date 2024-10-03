
export default function Contact() {
  return (
   
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/FLOWERS-AND-PLANTS.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-white text-5xl font-bold">Contact Us</h1>
            <p className="text-white mt-4">We'd love to hear from you! Feel free to get in touch.</p>
            
            <form className="mt-6 space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  className="w-full p-3 h-32 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-pink-500 text-white p-3 rounded-md hover:bg-pink-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}


// export default function Contact() {
//     return (
//         <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/FLOWERS-AND-PLANTS.jpg')" }}>
//           <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
//             <h1 className="text-white text-5xl font-bold">This is Contact Page</h1>
//             <p className="text-white mt-4">Feel free to reach out to us for any inquiries!</p>
//           </div>
//         </div>
//     );
//   }