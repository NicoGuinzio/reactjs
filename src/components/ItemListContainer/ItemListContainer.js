import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = ({titulo}) => {
    return(
        <>
            <div>
                <h2 className='tituloItemList'>{titulo}</h2>
                <ItemList/>
            </div>
        </>
    );
}

