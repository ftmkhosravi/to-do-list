function Modal(props) {
  const onFinish = (event) => {
    var id = event.target.id;
    if (id === "1") {
      props.onDone();
    } else {
      props.onProcess();
    }
  };

  return (
    <div className="modal">
      <h2 className="header">{props.header}</h2>
      <p className="moreabout">{props.moreabout}</p>
      <div className="actions">
        <button className="btn btn--alt" onClick={onFinish} id={"1"}>
          Done
        </button>
        <button className="btn" onClick={onFinish} id={"2"}>
          on process
        </button>
      </div>
    </div>
  );
}
export default Modal;
