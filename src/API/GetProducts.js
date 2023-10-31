

export async function getProductsAPI() {
    const url = 'http://localhost:3001/products'
    const res = await fetch(url)
    const data = await res.json()
    console.log("data is: ", data)
}
