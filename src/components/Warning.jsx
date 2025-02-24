import React, { useState } from "react";

const Warning = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2>Important Information</h2>
            <p>
              This is an example of the program that I built to showcase the UI
              aspect of the project. <br></br>
              <br />
              Some data is made up or left out in order to protect the privacy
              of the professionals shown in the web app.
              <br />
              <br />
              The actual dataset that was scraped and compiled using Python
              scripts and was given to the University contains 2000+ alumni
            </p>
            <button onClick={closePopup} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  closeButton: {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Warning;
