const recomList = document.getElementsByClassName("recomList")




fetch('https://fakestoreapi.com/products/categories')
    .then(Response => {
        if (!Response.ok) {
            throw new Error(Response.status)
        }
        return Response.json()
    })
    .then(data[0]=> recomList.textContent)
    .catch(Error=>console.error(error))
