export const getStaticProps = async () => {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=RYPX1Dh9ls2o2pcSRqhauIFV2uUGzGok&q=smile&limit=9&offset=0&rating=g&lang=en`)
    const data = await res.json()
    return data

  }



export default async function handler(req, res) {
    const data = await getStaticProps()
    const result = []
    data.data.map((data)=>{
      result.push(
        {
          "id": data.id,
          "image": data.images.original_still.url, 
          "title": data.title
        })
    })


    res.status(200).json(result)
  }

