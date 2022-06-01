import PropTypes from "prop-types";

export default function Greeting({ name, onAdd }) {
  return <h1>Hello, {name}</h1>;
}

//<componentName>.propTypes
// Greeting.propTypes = {
//   name: PropTypes.string.isRequired,
//   onAdd: PropTypes.func,
// };
