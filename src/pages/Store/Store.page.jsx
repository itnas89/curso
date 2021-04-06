	
import { Link } from 'react-router-dom';
import './Store.page.css';

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
 
export default function Store() {
  return (
    <div className="Store">
      <h1>Bienvenido a mi tienda</h1>

      <Link className="Product-link" to={abrirProducto()}>
          Ir al producto
      </Link>
    </div>
  );
}