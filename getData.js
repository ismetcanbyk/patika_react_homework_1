export default getData
import axios from "axios"



async function getData(num) {
    const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${num}`)

    const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${num}`)

    return {user,post}

}