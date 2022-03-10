const Card = (props) => {
  return (
    <>
        <div className="card">
          <img src={props.imgsrc} alt="" />
          <h3>{props.title}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            accusantium, perspiciatis, deleniti dolores tempora sit autem nulla
            soluta animi accusamus unde qui officia error. Repellat omnis illum
            incidunt nisi perspiciatis.
          </p>

          <button>learn more</button>
        </div>
    </>
  );
};

export default Card;
