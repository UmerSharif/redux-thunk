import React from "react";
import { connect } from "react-redux";

import { addIncrement } from "./actions/actions";

function Counter({ count, addIncrement }) {
  return (
    <div>
      <p>Hi I am Counter</p>
      <p>Cunt : {count}</p>
      <button onClick={addIncrement}>Count Me Dude</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     OnIncrement: () => {
//       const action = { type: "INCR" };
//       dispatch(action);
//     },

//     onAdd: data => {
//       const action = { type: "ADD", payload: data };
//       dispatch(action);
//     }
//   };
// };

export default connect(mapStateToProps, { addIncrement })(Counter);
