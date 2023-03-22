import { useState } from "react";

const slides = [
  {
    id: 0,
    image: "slide-0",
    thumbnail: "slide-0-thumbnail",
    alt: ""
  },
  {
    id: 1,
    image: "slide-1",
    thumbnail: "slide-1-thumbnail",
    alt: ""
  },
  {
    id: 2,
    image: "slide-2",
    thumbnail: "slide-2-thumbnail",
    alt: ""
  },
  {
    id: 3,
    image: "slide-3",
    thumbnail: "slide-3-thumbnail",
    alt: ""
  }
];

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(slides[0].id);

  const onSliderControlButtonEnumClick = () => {
    if (slideNumber === 0) {
      setSlideNumber(slides.length - 1);
    } else {
      setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);
    }
  };

  const onSliderControlButtonEnumFwdClick = () => {
    if (slideNumber === slides.length - 1) {
      setSlideNumber(0);
    } else {
      setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
    }
  };

  const handleSliderControlRadioChange = ( changeEvent ) => {
    setSlideNumber(Number(changeEvent.target.value));
  };

  return (
    <section className="slider">
      <div className="slider__wrapper container center">
      <h2 className="slider__header center">Галерея нашего кафе</h2>
      <div className="slider__proper">
          <picture className="slider__picture">
            {/* <source srcSet={`img/slides/slide-${ slideNumber }.avif 1x, img/slides/slide-${ slideNumber }@2x.avif 2x, img/slides/slide-${ slideNumber }@3x.avif 3x, img/slides/slide-${ slideNumber }@4x.avif 4x`} type="image/avif" />
            <source srcSet={`img/slides/slide-${ slideNumber }.webp 1x, img/slides/slide-${ slideNumber }@2x.webp 2x, img/slides/slide-${ slideNumber }@3x.webp 3x, img/slides/slide-${ slideNumber }@4x.webp 4x`} type="image/webp" /> */}
            {/* <img className="slider__image" src={ `img/slides/slide-${ slideNumber }.jpg` } srcSet={`img/slides/slide-${ slideNumber }.jpg 1x, img/slides/slide-${ slideNumber }@2x.jpg 2x, img/slides/slide-${ slideNumber }@3x.jpg 3x, img/slides/slide-${ slideNumber }@4x.jpg 4x`} width="726" height="408" alt="" /> */}
            <img className="slider__image" src={ `img/slides/slide-${ slideNumber }.jpg` } width="726" height="408" alt="" />
          </picture>
        <button className="slider__control-button-enum slider__control-button" type="button" onClick={onSliderControlButtonEnumClick}>Назад</button>
        <form>
          <ul className="slider__control-list list-reset">
            { slides.map((slide) => {
              return (
                <li className="slider__control-item" key={ slide.id }>
                  <input className="slider__control-radio visually-hidden" type="radio" name="slide" id={ slide.image } value={ slide.id } onChange={ handleSliderControlRadioChange } checked={ slide.id === slideNumber } />
                  <label className="slider__control-label" htmlFor={ slide.image }>
                    <picture className="slider__control-picture">
                      {/* <source srcSet={`img/slides/${ slide.thumbnail }.avif 1x, img/slides/${ slide.thumbnail }@2x.avif 2x, img/slides/${ slide.thumbnail }@3x.avif 3x, img/slides/${ slide.thumbnail }@4x.avif 4x`} type="image/avif" /> */}
                      {/* <source srcSet={`img/slides/${ slide.thumbnail }.webp 1x, img/slides/${ slide.thumbnail }@2x.webp 2x, img/slides/${ slide.thumbnail }@3x.webp 3x, img/slides/${ slide.thumbnail }@4x.webp 4x`} type="image/webp" /> */}
                      {/* Пережать */}
                      <img className="slider__control-image" src={ `img/slides/${ slide.thumbnail }.jpg` } srcSet={`img/slides/${ slide.thumbnail }.jpg 1x, img/slides/${ slide.thumbnail }@2x.jpg 2x, img/slides/${ slide.thumbnail }@3x.jpg 3x, img/slides/${ slide.thumbnail }@4x.jpg 4x`} width="167" height="128" alt="" />
                    </picture>
                  </label>
                </li>
              );
            }) }
          </ul>
        </form>
        <button className="slider__control-button-enum slider__control-button-enum--fwd slider__control-button" type="button" onClick={onSliderControlButtonEnumFwdClick}>Вперёд</button>
      </div>
      </div>
    </section>
  );
};

export { Slider };
