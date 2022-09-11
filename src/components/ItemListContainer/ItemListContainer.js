import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = ({titulo}) => {
    return(
        <>
            <div className='cardContainer'>
                <div>
                <ItemList/>
                </div>
            </div>
        </>
    );
}

