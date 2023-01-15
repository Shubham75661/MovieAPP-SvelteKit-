import key from meta.env.TMBD_API_KEY

export async function load({data, fetch}){
    const res = await fetch(key)
    const movie = await res.json();
    console.log(movie)
    return{
        user : "hii"
    }
}