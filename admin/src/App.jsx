import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [show, setShow] = useState(false);

  const fetchFeedbacks = async () => {
    const res = await axios.get("http://localhost:5000/feedbacks");
    setFeedbacks(res.data);
  };

  return (
    <>
    
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1">
        <div className="text-center w-100">
          <h2 className="fw-bold">Admin Panel</h2>
          <button
            className="btn btn-dark mt-3 mb-4"
            onClick={() => {
              setShow(!show);
              if (!show) fetchFeedbacks();
            }}
            >
            {show ? "Hide Feedback" : "View Submitted Feedback"}
          </button>

          {show && (
            <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
              {feedbacks.map((f, index) => (
                <div className="card shadow-sm" key={index} style={{ width: "350px" }}>
                  <div className="card-body">
                    <h5 className="card-title">{f.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{f.email}</h6>
                    <p className="card-text">{f.message}</p>
                    <small className="text-muted">
                      Submitted on: {new Date(f.timestamp).toLocaleString()}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted w-100 mb-5">
        © 2025 Shreyansh Goyal | Feedback Collector Admin
      </footer>
    </div>
          </>
  );
}

export default App;
