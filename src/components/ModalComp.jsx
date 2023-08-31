import React from "react";
import Modal from "react-modal";

const ModalComp = ({ children, visible, setVisible }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: 300,
      width: 300,
    },
  };
  return (
    <Modal visible={true} style={customStyles}>
      {children}
    </Modal>
  );
};

export default ModalComp;
