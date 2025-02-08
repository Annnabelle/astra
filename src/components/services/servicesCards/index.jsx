import React from "react";
import "./styles.sass";

const ServicesCards = () => {
  const servicesCardsInfo = [
    {
      id: 1,
      href: "#",
      img: "https://i.imgur.com/oYiTqum.jpg",
      title: "Jessica Parker",
      status: "1 hour ago",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
    },
    {
      id: 2,
      href: "#",
      img: "https://i.imgur.com/oYiTqum.jpg",
      title: "Jessica Parker",
      status: "1 hour ago",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
    },
    {
      id: 3,
      href: "#",
      img: "https://i.imgur.com/oYiTqum.jpg",
      title: "Jessica Parker",
      status: "1 hour ago",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
    },
    {
      id: 4,
      href: "#",
      img: "https://i.imgur.com/oYiTqum.jpg",
      title: "Jessica Parker",
      status: "1 hour ago",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
    },
  ];
  return (
    <div class='cards'>
      {servicesCardsInfo?.map((item) => (
        <div key={item?.id}>
          <a
            href={item?.href}
            class='card'
          >
            <img
              src={item?.img}
              class='card__image'
              alt=''
            />
            <div class='card__overlay'>
              <div class='card__header'>
                <svg
                  class='card__arc'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path />
                </svg>
                <img
                  class='card__thumb'
                  src='https://i.imgur.com/7D7I6dI.png'
                  alt=''
                />
                <div class='card__header-text'>
                  <h3 class='card__title'>{item?.title}</h3>
                  <span class='card__status'>{item?.status}</span>
                </div>
              </div>
              <p class='card__description'>{item?.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServicesCards;
