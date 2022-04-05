import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import useFetch from "../utils/useFetch"

const Top = () => {
  const { response } = useFetch(
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=PYPEB7oo5aBEhPCaB4sUutdc17tNXk4E"
  )

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  }

  const checkRank = (rank) => {
    if (+rank === 1) {
      return "text-yellow-400"
    } else if (+rank === 2) {
      return "text-gray-400"
    } else if (+rank === 3) {
      return "text-red-400"
    }
    return "text-black"
  }

  return (
    <div>
      {response?.results?.books.length > 0 && (
        <Carousel responsive={responsive}>
          {response?.results?.books.map((book, key) => (
            <div className="p-5" key={key}>
              <div className="relative max-w-sm rounded overflow-hidden shadow-lg mx-auto text-center h-full">
                <span
                  className={`h-8 w-8 absolute right-5 top-5 bg-white flex justify-center items-center rounded-full ${checkRank(
                    book.rank
                  )}`}
                >
                  {book.rank}
                </span>
                <img
                  className="w-full"
                  src={book.book_image}
                  alt="Sunset in the mountains"
                />
                <div className="bg-white/90 px-6 py-4 absolute bottom-0 z-10">
                  <div className="font-bold text-xl mb-2">{book.title}</div>
                  <p className="text-gray-700 text-base">{book.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  )
}

export default Top
