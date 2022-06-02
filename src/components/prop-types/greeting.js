import PropTypes from "prop-types";
import useDocumentTitle from "../custom-hooks/use-document-title";

export default function Greeting({ name, onAdd }) {
  useDocumentTitle("Home");

  return <h1>Hello, {name}</h1>;
}

//<componentName>.propTypes
// Greeting.propTypes = {
//   name: PropTypes.string.isRequired,
//   onAdd: PropTypes.func,
// };
