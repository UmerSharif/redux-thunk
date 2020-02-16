import React, { useRef } from "react";
import { onADD } from "./actions/actions";
import { connect } from "react-redux";
function FormData({ formData, onADD }) {
  const Inputref = useRef();
  const OnFormSubmit = e => {
    e.preventDefault();
    onADD(Inputref.current.value);
  };
  return (
    <div>
      <form onSubmit={OnFormSubmit}>
        <p>Form Data : {formData}</p>
        <input ref={Inputref} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    formData: state.formData
  };
};

export default connect(mapStateToProps, { onADD })(FormData);
