import makeRequest from '../makeRequest'

export default async (data) =>  {
    const formData = new FormData()
    formData.append("title", data.title)
    formData.append("content", data.content)
    for (const key of Object.keys(data.files)) {
        formData.append('files', data.files[key])
    }


    await makeRequest("/posts/create" , "post" , formData)
}




