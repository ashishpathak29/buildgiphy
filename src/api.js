

const BASE_URL = 'https://api.giphy.com/v1/gifs'
const SEARCH_URL = `${BASE_URL}/search`
const TRENDING_URL = `${BASE_URL}/trending`
const REACT_APP_API_KEY = 'tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ'


export async function getTrendingItem () {
    const params = new URLSearchParams()
    params.set('api_key', REACT_APP_API_KEY)
    const url = `${TRENDING_URL}?${params.toString()}`
    let json
    try {
        const res = await fetch(url)
        json = await res.json()
    } catch(err) {
        console.log(err)
    }
    return json.data
}

//id, title, url, embed_url, images: {original}, username
export async function searchItems ({query='', offset=0, limit= 10, rating='g'}) {
    const params = new URLSearchParams()
    if(query) {
        params.set('q', query)
    }
    params.set('offset', offset.toString())
    params.set('limit', limit.toString())
    params.set('rating', rating)
    params.set('api_key', REACT_APP_API_KEY)
    const url = `${SEARCH_URL}?${params.toString()}`
    let json
    try {
        const res = await fetch(url)
        json = await res.json()
    } catch(err) {
            console.log(err)
    }

    return json.data


}