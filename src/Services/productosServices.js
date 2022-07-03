
export function getAllProductos(buscar){
    // return instance.get("sites/MLA/search?q=ipod")
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q="+buscar)
    .then(res=>res.json())
}
export function getByIdProductos(id){
    return fetch("https://api.mercadolibre.com/items/"+id)
    .then(res=>res.json())
}