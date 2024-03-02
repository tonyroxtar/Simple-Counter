const SecondsCounter = (props) => {
  return (
    <div className="counter d-flex justify-content-center mt-5">
  <div className="col-auto d-flex justify-content-center align-items-center">
    <div className="fa-regular fa-clock bg-dark p-5 m-4 rounded text-light big-text"></div>
  </div>
  <div className="col-auto">
    <div className="digit4 bg-dark p-4 m-4 rounded text-light big-text">{props.digit4}</div>
  </div>
  <div className="col-auto">
    <div className="digit3 bg-dark p-4 m-4 rounded text-light big-text">{props.digit3}</div>
  </div>
  <div className="col-auto">
    <div className="digit2 bg-dark p-4 m-4 rounded text-light big-text">{props.digit2}</div>
  </div>
  <div className="col-auto">
    <div className="digit1 bg-dark p-4 m-4 rounded text-light big-text">{props.digit1}</div>
  </div>
</div>
  );
};

export default SecondsCounter;
