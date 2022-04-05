import React from "react"
import { useParams } from "react-router-dom"
import Main from "../layouts/Main"
import useFetch from "../utils/useFetch"

const Rank = () => {
  let params = useParams()
  const { rankId } = params

  const { response } = useFetch(
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=PYPEB7oo5aBEhPCaB4sUutdc17tNXk4E"
  )

  const data = response?.results?.books.find((book) => book.rank === +rankId)
  return (
    <Main>
      <div className="container mx-auto py-32 px-6">
        <h1 className="text-white text-2xl lg:text-6xl xl:text-7xl">
          {data?.title}
        </h1>
        <div className="my-10 bg-white p-6 rounded-xl flex flex-wrap lg:flex-nowrap">
          <img
            src={data?.book_image}
            alt={data?.title}
            className="shadow-2xl lg:ml-0 lg:mr-6 mb-10 lg:mb-0 mx-auto"
          />
          <div className="flex-1">
            <p className="text-gray-400 mb-5">{data?.contributor}</p>
            {data?.description}
            <div className="flex justify-end mt-10">
              <a
                href={data?.amazon_product_url}
                target="_blank"
                rel="noreferrer"
                className="block bg-purple-700 shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all cursor-pointer"
              >
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Rank
