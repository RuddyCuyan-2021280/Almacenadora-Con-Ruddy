import React, { useState } from 'react'
import './css/App.css'

function AppTable() {


    const [todos, setTodos] = useState([]);
    const [contador, setId] = useState(1);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaInicio, setFechaI] = useState("");
    const [fechaFinal, setFechaF] = useState("");
    const [datos, setDatos] = useState([]);


    const add = () => {
        const newAll = `Nombre: ${nombre} ||Descripcion: ${descripcion} ||FechaInicio: ${fechaInicio} ||FechaFinal: ${fechaFinal}`;
        const nuevaFila = { id: contador, name: nombre, desc: descripcion, fecha: fechaInicio, date: fechaFinal };
        setTodos([...todos, { todo: newAll, completo: false }]);
        setId(contador + 1);
        setDatos([...datos, nuevaFila]);
        setNombre("");
        setDescripcion("");
        setFechaI("");
        setFechaF("");
    };

    const Update = (id) => {
        
        const editedTodo =`Nombre: ${nombre} ||Descripcion: ${descripcion} ||FechaInicio: ${fechaInicio} ||FechaFinal: ${fechaFinal}` ;
        const newTodos = { name: nombre, desc: descripcion, fecha: fechaInicio, date: fechaFinal };
        newTodos[id] = editedTodo;
        setTodos([...todos, {todo: newTodos, completo:false}]);
      };

    const Delete = (id) => {
        setDatos(datos.filter((todo) => todo.id !== id));
    };



    return (

        <div>
            <button id='boton' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Agregar Tarea
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Nueva Tarea</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="offcanvas-body">
                                <div>
                                    <div>
                                        <label >
                                            Nombre
                                            <br />
                                            <input className='form-control' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                                        </label>
                                    </div>
                                    <div>
                                        <label >
                                            <br />
                                            Descripcion
                                            <br />
                                            <input className='form-control' type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                                        </label>
                                    </div>
                                    <div>
                                        <div>
                                            <label >
                                                <br />
                                                Fecha de Inicio
                                                <br />
                                                <input className='form-control' type="date" value={fechaInicio} onChange={(e) => setFechaI(e.target.value)} required />
                                            </label>
                                        </div>
                                        <div>
                                            <label >
                                                <br />
                                                Fecha de cierre
                                                <br />
                                                <input className='form-control' type="date" value={fechaFinal} onChange={(e) => setFechaF(e.target.value)} required />
                                            </label>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={add}>Agregar</button>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> # </th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Final</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {datos.map((tbl) => (
                        <tr key={tbl}>
                            <td>{tbl.id}</td>
                            <td>{tbl.name}</td>
                            <td>{tbl.desc}</td>
                            <td>{tbl.fecha}</td>
                            <td>{tbl.date}</td>

                            <td>
                                <button id='boton' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editar">
                                    Editar
                                </button>


                                <div class="modal fade" id="editar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Nueva Tarea</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div className="offcanvas-body">
                                                    <div>
                                                        <div>
                                                            <label >
                                                                Nombre
                                                                <br />
                                                                <input className='form-control' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label >
                                                                <br />
                                                                Descripcion
                                                                <br />
                                                                <input className='form-control' type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <label >
                                                                    <br />
                                                                    Fecha de Inicio
                                                                    <br />
                                                                    <input className='form-control' type="date" value={fechaInicio} onChange={(e) => setFechaI(e.target.value)} required />
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <label >
                                                                    <br />
                                                                    Fecha de cierre
                                                                    <br />
                                                                    <input className='form-control' type="date" value={fechaFinal} onChange={(e) => setFechaF(e.target.value)} required />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => Update(tbl.id)}>Aceptar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>




                            <td>
                                <button className="btn btn-primary" onClick={() => Delete(tbl.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )




}

export default AppTable