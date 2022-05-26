import React from "react";
import "./style.css";

function index() {
  return (
    <div>
      <div>
        <form className="positionCenter">
          <h1 className="colorTitle">BEM-VINDO</h1>
          <div className="position_inla">
            <label htmlFor="nickName" className="positionUser">
              Usuário:
            </label>
            <input type="text" placeholder="Ryoto_sakamoto" required />
          </div>
          <div className="position_inla">
            <label htmlFor="passaword" className="positionPassaword">
              Senha:
            </label>
            <input type="password" placeholder="@1234" required />
          </div>
          <div className="position_inla">
            <button type="submit" class="btn btn-outline-danger">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default index;
