import { automata } from "./automata";
import { useState } from "react";
import { Alert } from "./Alert";

function App() {
  const [output, setOutput] = useState("");
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccess(false);
    setDanger(false);

    const code = event.target.inputCode.value;
    const result = automata(code);

    setOutput(result.msg);

    if (result.success) {
      setSuccess(true);
    } else {
      setDanger(true);
    }
  };
  return (
    <div className="container mt-4">
      <div className="card text-center">
        <div className="row justify-content-center">
          <div className="col-6 m-3">
            <img
              src="src/assets/automata.png"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Validar códigos de descuento</h5>
          <div className="row justify-content-center">
            <div className="col-auto">
              <form onSubmit={handleSubmit}>
                <label htmlFor="inputCode" className="form-label">
                  Código
                </label>
                <input
                  type="text"
                  id="inputCode"
                  className="form-control mb-2"
                />
                <button type="submit" className="btn btn-primary">
                  Validar
                </button>
              </form>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="card-text mt-3 col-auto">
              {success && <Alert message="Cadena válida" type="success" />}
              {danger && <Alert message="Cadena no válida" type="danger" />}
              {output}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
