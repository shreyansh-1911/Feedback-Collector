import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [show, setShow] = useState(false);

  const fetchFeedbacks = async () => {
    const res = await axios.get("http://localhost:5000/feedbacks");
    setFeedbacks(res.data);
  };

  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <button
        className="btn btn-secondary mt-3 mb-3"
        onClick={() => {
          setShow(!show);
          if (!show) fetchFeedbacks();
        }}
      >
        {show ? "Hide Feedback" : "View Submitted Feedback"}
      </button>

      {show &&
        feedbacks.map((f, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-body">
              <h5>{f.name}</h5>
              <h6>{f.email}</h6>
              <p>{f.message}</p>
              <small className="text-muted">
                Submitted on: {new Date(f.timestamp).toLocaleString()}
              </small>
            </div>
          </div>
        ))}
      <footer className="text-center mt-5 text-muted">
        © 2025 Shreyansh Goyal | Feedback Collector Admin
      </footer>
    </div>
  );
}

export default App;
