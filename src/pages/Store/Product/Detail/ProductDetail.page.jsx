	
import { useParams } from 'react-router-dom';
import './ProductDetail.page.css';
 
export default function ProductDetail(props) {
  let { id, vistoEnStore, enOferta } = props.history.location.state
 
  return (
    <div className="Product">
      <div><strong>Aquí irán los datos del producto:</strong> {id}</div>
      <div><strong>Visto en la tienda:</strong> {(vistoEnStore) ? 'Si' : 'No'}</div>
      <div><strong>En oferta:</strong> {(enOferta) ? 'Si' : 'No'}</div>
    </div>
  );
}