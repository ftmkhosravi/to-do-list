import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightColor, setLightColor] = useState("white");

  function more() {
    setIsModalOpen(true);
  }

  function closeModalHandler() {
    setIsModalOpen(false);
  }

  function doneHandler() {
    setLightColor("green");
    closeModalHandler();
  }

  function processHandler() {
    setLightColor("red");
    closeModalHandler();
  }

  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <span style={{ background: lightColor }} className="light"></span>
      <div className="actions">
        <button className="btn" onClick={more}>
          More
        </button>
      </div>
      {isModalOpen && (
        <Modal
          onDone={doneHandler}
          onProcess={processHandler}
          header={props.title}
          moreabout={props.moreabout}
        />
      )}
      {isModalOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
}
export default Todo;
