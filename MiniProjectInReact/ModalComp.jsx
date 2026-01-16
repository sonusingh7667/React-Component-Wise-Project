import React from 'react'

const ModalComp = ({ isOpen, onClose, title, children }) => {
 if (!isOpen) return null;

  return (
    <div
      style={styles.backdrop}
      onClick={onClose}
    >
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{title}</h2>
        <div>{children}</div>

        <button onClick={onClose} style={styles.closeBtn}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalComp


const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "300px",
  },
  closeBtn: {
    marginTop: "15px",
  },
};