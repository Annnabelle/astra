import React from "react";
import casesBg from "../../assets/casesBg.png";
import "./styles.sass";
import Button from "../button";

const Cases = () => {
  const casesData = [
    {
      id: 1,
      img: casesBg,
      title: "Walter engineering",
      content: "Разработали интерфейс позволяющий клиенту ознакомиться с необычными продуктами от...",
      href: "#",
    },
    {
      id: 2,
      img: casesBg,
      title: "Walter engineering",
      content: "Разработали интерфейс позволяющий клиенту ознакомиться с необычными продуктами от...",
      href: "#",
    },
    {
      id: 3,
      img: casesBg,
      title: "Walter engineering",
      content: "Разработали интерфейс позволяющий клиенту ознакомиться с необычными продуктами от...",
      href: "#",
    },
    {
      id: 4,
      img: casesBg,
      title: "Walter engineering",
      content: "Разработали интерфейс позволяющий клиенту ознакомиться с необычными продуктами от...",
      href: "#",
    },
  ];
  return (
    <div className='cases'>
      <div className='container'>
        <div className='casesContainer'>
          <div className='casesTitle'>
            <h3 className='title'>Кейсы нашей компании</h3>
          </div>
          <div className='casesItemsContainer'>
            {casesData?.map((item) => (
              <div
                className='casesItemContainer'
                key={item?.id}
              >
                <div className='itemImage'>
                  <img
                    src={item?.img}
                    alt={item?.img}
                    className='img'
                  />
                </div>
                <div className='casesItem'>
                  <div className='itemTitle'>
                    <h4 className='title'>{item?.title}</h4>
                  </div>
                  <div className='itemContent'>
                    <p className='content'>{item?.content}</p>
                  </div>
                  <div className='itemLink'>
                    <a
                      href={item?.href}
                      className='link'
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='casesButton'>
            <Button>Посмотреть все кейсы</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
