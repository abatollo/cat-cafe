import React from "react";
import Title, { TitleSize, TitleLevel } from "../../ui/title/title";
import StarIcon from "../star-icon/star-icon";
import "./style.css";

function StarCard({
  name, // имя кота
  about, // информация о коте
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image // url c фото кота
}) {
  return (
    <article className="star-card">
      <figure className="star-card__figure">
        <img
          src={image}
          className="star-card__image"
          width={313}
          height={320}
          alt="изображение кота"
        />
        <StarIcon className="star-card__icon" feature={feature} />
      </figure>
      <Title size={TitleSize.SMALL} level={TitleLevel.H3}>
        {name}
      </Title>
      <p
        className="star-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </article>
  );
}

export default StarCard;
