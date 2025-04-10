import Button from "./Button";
function Card({ dessert }) {
  const { category, name, price, image } = dessert;

  console.log(image.thumbnail);

  return (
    <div className="flex flex-col m-4 w-64 h-80">
      <img className="rounded-lg shadow-sm" src={image.desktop} alt="" />

      <Button />

      <div>
        <p>{category}</p>
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Card;
