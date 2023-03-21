const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper container center">
        <h1 className="hero__heading">Первое в России котокафе</h1>
        <p className="hero__description">Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый из них ищет новый дом. Животных можно гладить, фотографировать, играть с ними.</p>
        <p className="hero__note">Рабочее время с 8:00 до 23:00</p>
        <address className="hero__location">Санкт-Петербург, набережная реки Карповки, дом 5, литера П</address>
      </div>
    </section>
  );
};

export { Hero };
