import closeBtn from "../assets/close.svg";

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const hideModal = () => {
    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  };
  return (
    <div className="modal">
      <div className="close-modal">
        <img src={closeBtn} alt="close-icon" onClick={hideModal} />
      </div>
      <form className={`form ${animateModal ? "animate" : "close"}`}>
        <legend>New expense</legend>
      </form>
    </div>
  );
};

export default Modal;
