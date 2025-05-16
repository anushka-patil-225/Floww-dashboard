import React, { useState } from "react";

const Profile = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert("Saved! (Mock only)");
    setShowModal(false);
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div style={styles.card}>
        <img
          src={user.profilePic || "images/user.png"}
          alt="Profile"
          style={styles.avatar}
        />
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p style={{ wordBreak: "break-word", maxWidth: "100%" }}>
          <strong>Email:</strong> {user.email}
        </p>

        <button style={styles.editButton} onClick={() => setShowModal(true)}>
          Edit
        </button>
      </div>

      {showModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3 style={styles.modalTitle}>Edit Profile</h3>
            <input
              type="text"
              name="name"
              value={editedUser.name || ""}
              onChange={handleChange}
              placeholder="Name"
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              value={editedUser.email || ""}
              onChange={handleChange}
              placeholder="Email"
              style={styles.input}
            />
            <p style={styles.disclaimer}>
              *This is a dummy form. Changes are not saved permanently.
            </p>

            <div style={styles.buttonGroup}>
              <button onClick={handleSave} style={styles.saveButton}>
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                style={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    boxSizing: "border-box", // ensures padding is included in width
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
    maxWidth: "100%", // ensures avatar doesn't overflow on small screens
  },

  editButton: {
    marginTop: "10px",
    padding: "8px 16px",
    borderRadius: "6px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 12,
    width: "400px",
    maxWidth: "90vw",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: "20px",
  },
  input: {
    width: "90%",
    padding: 10,
    margin: "10px 0",
    borderRadius: 6,
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  saveButton: {
    flex: 1,
    marginRight: "10px",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  cancelButton: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  disclaimer: {
    fontSize: "12px",
    color: "#666",
    fontStyle: "italic",
    marginTop: "10px",
    marginBottom: "10px",
  },
};

export default Profile;
