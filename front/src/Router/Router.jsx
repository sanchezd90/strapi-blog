import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Views/Home/home";
import { Blog } from "../Views/Blog/blog";

export const Router = () => {
  return (
    <div>
      <header></header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </div>
  );
};
