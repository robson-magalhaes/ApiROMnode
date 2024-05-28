type Produtos = {
    title: string,
    preco: number
}
export default () : Produtos[] =>{
    return [
        {title:"carne", preco: 36},
        {title:"roupa", preco: 120},
        {title:"lanche", preco: 15},
        {title:"boné", preco: 35}
    ]
}