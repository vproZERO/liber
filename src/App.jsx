import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home/home";
import Books from "./pages/books/books";
import Profile from "./pages/profile/profile";
import ObunaBolish from "./pages/profile/components/obuna-bolish";
import Xisob from "./pages/profile/components/xisob";
import Kitoblarim from "./pages/profile/components/kitoblarim";
import AudioKitob from "./pages/profile/components/kitoblarim/audio-kitob";
import ElectronKiton from "./pages/profile/components/kitoblarim/electron-kiton";
import BosmaKitob from "./pages/profile/components/kitoblarim/bosma-kitob";
import Saqlaganlarim from "./pages/profile/components/saqlaganlarim";
import Sozlamalar from "./pages/profile/components/sozlamalar";
import HisobToldirish from "./pages/profile/components/hisob-toldirish";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home/:books" element={<Books />} />
          <Route path="profile" element={<Profile />}>
            <Route path="/profile/obuna-bolish" element={<ObunaBolish />} />
            <Route path="/profile/xisob" element={<Xisob />} />
            <Route
              path="/profile/xisob/toldirish"
              element={<HisobToldirish />}
            />
            <Route path="/profile/kitoblarim" element={<Kitoblarim />}>
              <Route
                path="/profile/kitoblarim/audio-kitob"
                element={<AudioKitob />}
              />
              <Route
                path="/profile/kitoblarim/electron-kitob"
                element={<ElectronKiton />}
              />
              <Route
                path="/profile/kitoblarim/bosma-kitob"
                element={<BosmaKitob />}
              />
            </Route>
            <Route path="/profile/saqlaganlarim" element={<Saqlaganlarim />} />
            <Route path="/profile/sozlamalar" element={<Sozlamalar />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
