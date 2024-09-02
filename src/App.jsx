import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "./routes/home"
import { ProductSection } from "./routes/ProductSection"
import { Error404 } from "./routes/Error404"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductSection />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
