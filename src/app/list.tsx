import data from '../../data.json'

interface ListProps  {
  props : string;
}

export default function List({props} : ListProps) {

    const filterProducts = data.filter(item => 
        item.product.includes(props)
    )

    return (
        <div className="w-96 mx-auto">
          <ul className="menu bg-base-200 rounded-box p-4">
            {filterProducts.length > 0 ? (
    
              filterProducts.map((item => (
                <li key={item.id} className='py-2 my-2 bg-base-200 hover:bg-base-600'>{item.product}</li>
              ))
              )) : (
              <p>No se encontraron resultados</p>
            )}
          </ul>
        </div>  
    )
}