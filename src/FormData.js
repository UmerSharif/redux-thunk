import React, { useRef } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import { onADD } from "./actions/actions";

export default function FormData() {
  const dispatch = useDispatch();
  const { formData } = useSelector(state => ({
    formData: state.formData
  }));

  const Inputref = useRef();
  const OnFormSubmit = e => {
    e.preventDefault();
    dispatch(onADD(Inputref.current.value));
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

// const mapStateToProps = state => {
//   return {
//     formData: state.formData
//   };
// };

// export default connect(mapStateToProps, { onADD })(FormData);
