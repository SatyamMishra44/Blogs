import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // Gujarati sweets data
  const sweets = [
    {
      id: 1,
      name: "Dhokla & Khandvi",
      description: "Steamed savory-sweet cakes made from fermented batter (Dhokla) and rolled gram flour snacks (Khandvi).",
      image: "https://herbivorecucina.com/wp-content/uploads/2022/08/Dhokli-Khandvi-Pat-Vadi-4-2048x2048.jpg"
    },
    {
      id: 2,
      name: "Jalebi",
      description: "Crispy, spiral-shaped sweets soaked in sugar syrup, often served warm.",
      image: "https://aartiatmaram.com/wp-content/uploads/2021/09/Jalebi-Crispy-2048x1362.jpg"
    },
    {
      id: 3,
      name: "Doodh Pak",
      description: "A creamy, slow-cooked milk dessert with rice, nuts, and cardamom.",
      image: "https://www.bitensip.com/wp-content/uploads/2022/11/doodh-pak.jpg"
    },
    {
      id: 4,
      name: "Barfi",
      description: "Dense milk-based sweet available in various flavors like plain, coconut, or pistachio.",
      image: "https://holycowvegan.net/wp-content/uploads/2024/09/vegan-badam-katli-6.jpg"
    },
    {
      id: 5,
      name: "Sheera",
      description: "Semolina pudding flavored with ghee, cardamom, and nuts, often served as prasad.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQRLK0hPu0FAEAbwj6itYMZTBA3P3WqO37X5n2oybBUrPtP79PVA4h2rrM8DMFzD_cLs&usqp=CAU"
    }
  ];

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 border-0">
        <div className="card-body">
          <h1 className="text-center text-primary mb-4 display-4 fw-bold">
            Exploring the Gujra Sweets: A Sweet Journey!
          </h1>
          <h2 className="text-center text-secondary mb-4">By Arman Gupta</h2>
          
          <div className="alert alert-info">
            <p className="mb-0 text-center fs-3"><strong>Namaste!, 🙏</strong></p>
          </div>
          
          <p className="lead text-center mb-4">
            As a Nepali student living in Gujarat, I have been amazed by the variety of sweets this
            state has to offer. From the busy streets of Ahmedabad to the quiet lanes of Surat,
            Gujarat's sweets are a delightful treat for anyone with a sweet tooth. Let's dive into
            this sugary world and explore its richness together!
          </p>
          
          {/* Gujarati Sweets Cards Section */}
          <h2 className="text-primary mt-5 mb-4">Popular Gujarati Sweets</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            {sweets.map((sweet) => (
              <div key={sweet.id} className="col">
                <div className="card h-100 shadow-sm border-0">
                  <img 
                    src={sweet.image} 
                    className="card-img-top" 
                    alt={sweet.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center text-danger">{sweet.name}</h5>
                    <p className="card-text">{sweet.description}</p>
                  </div>
                  <div className="card-footer bg-transparent">
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-top border-bottom py-3 my-4">
            <h2 className="text-primary mt-2">The Sweet Tradition of Gujarat</h2>
            <p>Gujarat is not just known for its colorful festivals but also for its delicious sweets. 
                Let me start this journey with a small shock—Gujaratis even add sugar to dal and sabzi! 😲 Yes, their love for sweetness runs deep!
                People here celebrate every happy moment with something sweet.</p>
          </div>
          
          <h2 className="text-primary mt-4">Festivals & Sweets: A Perfect Match</h2>
          <p className="mb-4">
            One of my best experiences with Gujra sweets was during <strong>Diwali</strong>. The moment I entered my friend's house, I was welcomed by the heavenly smell of fresh pedas, crispy fafda, and hot jalebis. Everyone was cheerful, sharing sweets and laughter. It felt like a dreamland of happiness and flavors!
          </p>
          
          <h2 className="text-primary mt-4">Old Recipes, New Flavors</h2>
          <p className="mb-4">
            Gujarat is also home to creative twists on classics. Have you ever heard of <strong>chocolate dhokla</strong>? Or <strong>mango-flavored kaju katli</strong>? These modern creations show how Gujaratis love to experiment while keeping their love for sweets alive.
          </p>
          
          <h2 className="text-primary mt-4">Why Gujrati Sweets Are Loved by All</h2>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Authentic Taste:</strong> Traditional recipes passed down through generations.
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Diverse Flavors:</strong> A mix of sweet, salty, and spicy combinations.
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Festive Spirit:</strong> No celebration is complete without sweets.
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <strong>Innovation:</strong> New flavors keep the tradition alive in modern ways.
            </li>
          </ul>
          
          <div className="bg-light p-4 rounded mb-4">
            <h2 className="text-primary mt-2">Conclusion: Thank You, Gujarat!</h2>
            <p className="mb-0">
              Gujarati sweets are not just about taste; they are about happiness and culture. Whether it's the traditional flavors or the modern innovations, each sweet has its own story.
            </p>
          </div>
          <div className="alert alert-success text-center fw-bold fs-5">
            Dhanyavad, Gujarat! ❤️ Thank you for filling my days with sweetness and joy.
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;