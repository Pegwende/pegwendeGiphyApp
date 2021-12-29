export const getApiData = async ( props ) => {
    const myKey = 'RYPX1Dh9ls2o2pcSRqhauIFV2uUGzGok'
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${props.q}&limit=20&offset=${props.offset}&rating=g&lang=en`)
    const data = await res.json()
    console.log( "This is the props ", props )
    return data

  }

export default async function handler(req, res) {
    const q = req.query.q
    const offset= req.query.offset
    const data = await getApiData({q, offset})
    const result = []
    data.data.map((data)=>{
      result.push(
        {
          "id": data.id,
          "image": data.images.fixed_height.mp4, 
          "title": data.title
        })
    })


    res.status(200).json(result)
  }