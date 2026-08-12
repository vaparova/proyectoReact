// El componente hijo recibe las "props" como un objeto en los parámetros de la función
function TarjetaUsuario({ id, nombre, email, onEliminar }) {
    return (
      <li style={{ 
        padding: '10px', 
        margin: '10px 0', 
        backgroundColor: '#f4f4f4', 
        borderRadius: '5px',
        listStyle: 'none',
        borderLeft: '5px solid #61dafb', // Un detalle de color React
        display: 'flex',            // 👈 Un poco de estilo para alinear el botón
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <strong>{nombre}</strong> — <span>{email}</span>
        {/* Al hacer clic, ejecutamos la función que nos dio el padre pasándole nuestro propio ID */}
      <button 
        onClick={() => onEliminar(id)} 
        style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}
      >
         ❌ Eliminar
      </button>
      </li>
    );
  }
  
  export default TarjetaUsuario;
  