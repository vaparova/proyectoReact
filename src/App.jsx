import { useState, useEffect } from 'react';
import TarjetaUsuario from './components/TarjetaUsuario'; // 👈 1. Importamos el componente hijo


function App(){

  // 1. Estados (El equivalente a las propiedades de tu clase en Angular)
  const [todos, setTodos] = useState(['Aprender React', 'Migrar de Angular']);
  const [newTodo, setNewTodo] = useState('');

  // 2. Funcuones de lógica
  const addTodo = () => {
    if (newTodo.trim() === '' ) return; // Validación básica

    // En React NO usamos .push(). Creamos un array nuevo con el "spread operator" [...]
    setTodos([...todos, newTodo]);
    setNewTodo(''); // Limpiamos el imput
  };

  const deleteTodo = (indexTarget) =>{
    const nuevoTodo = todos.filter((_, index) => index !== indexTarget);
    setTodos(nuevoTodo);
  };
  // ejemplo de conexion con API utilizandi THEN


  const [usuarios2, setUsuarios2] = useState([]);
  const [cargando2, setCargando2] = useState(true);

  useEffect(() => {
    // Usamos fetch nativo de JavaScript (no hace falta HttpClient)
    // Esta forma se llama "Estructura de Cadena" utiliza promesas y then, no es
    // muy práctica ya que al ser dificil de leer produce "Callback Hell"

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsuarios2(data); // Guardamos los datos en el estado
        setCargando2(false); // Apagamos el indicador de carga
      });
  }, []); // 👈 ¡ESTE ARRAY VACÍO ES LA CLAVE!

  if(cargando2) return <h2>Cargando usuarios.. ⏳</h2>

 

const eliminarUsuario = (idTarget) => {
  const nuevosUsuarios = usuarios2.filter(user => user.id !== idTarget);
  setUsuarios2(nuevosUsuarios);
};
  

  // 3. El "Template" (Lo que devuelve la función)
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Mi Primer To-Do en React 🚀</h2>

      {/* Input con Binding manual */}
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Nueva tarea..."
      />
      <button onClick={addTodo}>Agregar</button>

      {/* Renderizado de lista (Equivalente al @for de Angular) */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{marginButtom:'8px'}}>
            {todo}{'..............................'}
            <button onClick={()=>deleteTodo(index)}>❌ Eliminar </button></li>
        ))}
      </ul>

      <h2>Lista de Usuarios desde API 👥</h2>
      <ul>
        {usuarios2.map(usuario =>(
          /* <li key={usuario.id}>
            <strong>{usuario.name}</strong> - {usuario.email}
          </li> */
           <TarjetaUsuario 
            key={usuario.id} 
            id={usuario.id} 
            nombre={usuario.name} 
            email={usuario.email} 
            onEliminar={eliminarUsuario}
          />
        
        
        
        ) )}
      </ul>
    </div>

          


  );
}
export default App;