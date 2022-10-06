import React, { useState} from "react";
import Modal from "react-modal";
import axios from 'axios';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Index({isOpen, dataGender}) {
  const [modalIsOpen, setIsOpen] = useState(isOpen);
  const [txtGender, setTextGender] = useState(dataGender.genero);

  function closeModal() {
    setIsOpen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const genderData = {
      "gender": txtGender,
      "idGender": dataGender.id_genero,
    }

    const {data} = await axios.put('http://localhost:3333/gender', genderData);
    alert(data.message);
    window.location.reload(true);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Atualização de Generos</h2>
        <div>
          <form>
            <div>
              <div>
                <input
                placeholder="Genero"
                id="txtGender"
                type="text"
                className="validate"
                value={txtGender}
                onChange={({target}) => setTextGender(target.value)}>
                </input>
              </div>
            </div>
            <button 
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={handleSubmit}>Atualizar</button>
            <button
            className="btn modal-trigger"
            onClick={() => {window.location.reload(true)}}>Cancelar</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Index;