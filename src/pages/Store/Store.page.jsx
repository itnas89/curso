	
import { Link } from 'react-router-dom';
import './Store.page.css';

 
export default function Store(props) {

  let abrirProducto = () => {
    let id = Math.floor(Math.random() * 20 +1)

    return {
        pathname: '/product/' + id,
        state: {
            id: id,
            vistoEnStore: true,
            enOferta: false
        }
      }
  }

  let abrirProductoButton = () => {
      let id = Math.floor(Math.random() * 20 +1)
  
      props.history.push({
          pathname: '/product/' + id,
          state: {
              id: id,
              vistoEnStore: true,
              enOferta: false
          }
      })
  }

  return (
    <div className="Store">
      <h1>Bienvenido a mi tienda</h1>

      <button className="Product-link" onClick={abrirProductoButton}>Ir al producto</button>
      {
        /*<Link className="Product-link" to={abrirProducto()}>
            Ir al producto
        </Link>*/
      }
    </div>
  );
}