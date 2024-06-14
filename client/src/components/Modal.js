import React from 'react';
import PropTypes from 'prop-types';
import styles from "../styles/Modal.module.css"
const Modal = ({ onClose, children }) => {
  return (
    <div className={styles.modaloverlay} onClick={onClose}>
      <div className={styles.modalcontent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalclose} onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
