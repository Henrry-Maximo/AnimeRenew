import { useEffect, useState } from 'react';
import api from '../../service/api';
import Table from 'react-bootstrap/Table';
import "./styleGender.css";
import ModalUpdateGender from '../../components/ModalGender';
import ModalDeleteGender from '../../components/ModalDelete';

function Index() {

  const [genders, setGenders] = useState([]);

  const [loadModalDelete, setLoadModalDelete] = useState(false);
  const [loadModalUpdate, setLoadModalUpdate] = useState(false);
  const [genderItem, setGenderItem] = useState('');

  function showUpdateGender(gender) {
    setLoadModalUpdate(true);
    setGenderItem(gender);
  }

  function showDeleteGender(gender) {
    setLoadModalDelete(true);
    setGenderItem(gender);
  }


  useEffect(() => {
    //let n1 = 10; | let n2 = 20; | let total = n1 + n2;
    async function getGender() {
      const { data } = await api.get('/gender');

      setGenders(data);
    }

    getGender();
  }, []);


  return (
    <>
    { loadModalUpdate && <ModalUpdateGender isOpen={loadModalUpdate} dataGender={genderItem} /> }
    { loadModalDelete && <ModalDeleteGender isOpen={loadModalDelete} dataGender={genderItem} /> }

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Gênero</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          genders.map((gender) => (
            <tr key={gender.id_genero}>
              <td>{gender.id_genero}</td>
              <td>{gender.genero}</td>
              <td>
                <button onClick={() => showUpdateGender(gender)} className="btn btn-dark">Editar</button>
                <button onClick={() => showDeleteGender(gender)} className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    </>
  );
}

export default Index;