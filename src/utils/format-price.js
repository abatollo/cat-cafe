const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", trailingZeroDisplay: "stripIfInteger" }).format(price);

  return formattedPrice;
};

export { formatPrice };
