const getFileUrl = (pic) => {
    if(!pic) return null
    return "http://localhost:8080/static/"+ pic
}

export default getFileUrl