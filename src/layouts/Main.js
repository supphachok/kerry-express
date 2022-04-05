import React from "react"
import Header from "./Header"

const Main = ({ children }) => {
  return (
    <main className="bg-purple-900 text-purple-500 overflow-x-hidden h-screen">
      <Header />
      {children}
    </main>
  )
}

export default Main
