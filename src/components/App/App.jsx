import React from "react";
import Header from "../Header/Header";
function App() {
  const slides = [
    {
      img: "https://mf.b37mrtl.ru/rbthmedia/images/2021.05/original/609eae6585600a01c42a6017.jpg",
      title: "Булгаков",
      description: "Кем был",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg/1200px-Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg",
      title: "Булгаков",
      description: "Кем был",
    },
    {
      img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/gettyimages-2665140-a1c77ccabe8660fb5123c8b6c5741316.jpg",
      title: "Булгаков",
      description: "Кем был",
    },
    {
      img: "https://admarginem.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/01/banner_shipping_2880x1200-1536x640.jpg.webp",
      title: "FAQ",
      description: "Кем был",
    },
    {
      img: "https://admarginem.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/banner_limonov_2880x1200-scaled.jpg.webp",
      title: "Лимонов",
      description: "Кем был",
    },
  ];
  return (
    <div className="App">
      <div className="page">
        <Header slides={slides}  />
      </div>
    </div>
  );
}

export default App;
