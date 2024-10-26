import data from '../../data.json'

export default function List({props}) {

    const filterProducts = data.filter(item => 
        item.product.includes(props)
    )

    return (
        <ul>
            {filterProducts.length > 0 ? (
    
              filterProducts.map((item => (
                <li key={item.id}>{item.product}</li>
              ))
              )) : (
              <p>No se encontraron resultados</p>
            )}
        </ul>
    )
}