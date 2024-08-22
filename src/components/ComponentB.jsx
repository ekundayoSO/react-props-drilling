import ComponentC from "./ComponentC";

const ComponentB = (props) => {
  const { data, setData } = props;

  return (
    <div>
      <h1>Component B</h1>
      <div>
        <h2>{data?.name}</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {data?.orders?.map((order, orderIndex) => {
            const {orderId, product, quantity, price} = order;
            return (
              <div key={orderIndex}>
                <p>Order ID: {orderId}</p>
                <p>Product: {product}</p>
                <p style={{ backgroundColor: "red" }}>
                  Quantity: {quantity}
                </p>
                <p>Price: {price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <ComponentC data={data} setData={setData} />
    </div>
  );
};

export default ComponentB;
