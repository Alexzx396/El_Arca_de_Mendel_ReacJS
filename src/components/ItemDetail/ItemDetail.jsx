import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'; 

const ItemDetail = ({detail}) => {
    
    return (
            <div className="product-detail-card" >
                <img className="product-detail-img" src={detail.pictureUrl} alt={detail.title}/>
                <div>
                    <h5 className="product-detail-title">{detail.title}</h5>
                    <h6 className="product-detail-brand">{detail.brand}</h6>
                    <p className="product-detail-description">{detail.description}</p>
                    <p className="product-detail-price">$ {detail.price}</p>
                </div>
                <ItemCount initial={1} stock={detail.stock}/>
            </div>
    )
}

export default ItemDetail