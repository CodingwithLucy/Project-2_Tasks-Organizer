import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const Note = (props) => {
  return (
    <tr>
      <td>{props.title}</td> <td>{props.category}</td> <td>{props.details}</td>
      <td>
        {props.date.getDate()}.{props.date.getMonth() + 1}.
        {props.date.getFullYear()}
      </td>
    </tr>
  );
};

Note.propTypes = {
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  details: propTypes.string.isRequired,
  date: propTypes.instanceOf(Date).isRequired,
};

export default Note;
