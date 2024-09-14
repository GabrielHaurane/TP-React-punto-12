import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Row } from "react-bootstrap";

const Formulario = ({ setCategoria, setPais }) => {
  const handleChange = (e) => {
    setCategoria(e.target.value);
  };

  const handleChange2 = (e) => {
    setPais(e.target.value);
  };

  return (
    <div>
      <Card>
        <Row className="my-5 mx-3">
          <h3 className="w-50">Buscar por categoría:</h3>
          <Form.Select className="w-50" onChange={handleChange}>
            <option>Open this select menu</option>
            <option value="business">business</option>
            <option value="crime">crime</option>
            <option value="domestic">domestic</option>
            <option value="education">education</option>
            <option value="entertainment">entertainment</option>
            <option value="environment">environment</option>
            <option value="food">food</option>
            <option value="health">health</option>
            <option value="lifestyle">lifestyle</option>
            <option value="other">other</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="technology">technology</option>
            <option value="top">top</option>
            <option value="tourism">tourism</option>
            <option value="world">world</option>
          </Form.Select>
        </Row>
        <Row className="my-5 mx-3">
          <h3 className="w-50">Buscar por país:</h3>
          <Form.Select className="w-50" onChange={handleChange2}>
            <option>Open this select menu</option>
            <option value="af">Afghanistan</option>
            <option value="ad">Andorra</option>
            <option value="ar">Argentina</option>
            <option value="bo">Bolivia</option>
            <option value="cl">Chile</option>
            <option value="cn">China</option>
            <option value="cg">Congo</option>
            <option value="cw">Curaçao</option>
            <option value="do">Dominican republic</option>
            <option value="sv">El Salvador</option>
            <option value="hn">Honduras</option>
            <option value="hk">Hong kong</option>
            <option value="in">India</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="ne">Niger</option>
          </Form.Select>
        </Row>
      </Card>
    </div>
  );
};

export default Formulario;