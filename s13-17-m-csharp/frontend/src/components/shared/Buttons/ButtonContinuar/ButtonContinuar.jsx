/* eslint-disable react/prop-types */
import './buttonContinuar.css';

export default function ButtonContinuar({
  onClick = () => {},
  title
}) {
  return (
    <div>
      <button onClick={onClick} className="btn-continuar">
        {title}
      </button>
    </div>
  );
}
