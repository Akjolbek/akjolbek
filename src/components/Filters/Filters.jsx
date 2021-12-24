import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";
import { productsContext } from "../../contexts/productsContext";

const Filters = ({ brand, setBrand, price, setPrice }) => {
  const { getProducts, products } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
console.log(products)

  return (
    <div style={{ marginTop: "20px", display: 'flex' }}>
      <Select
        allowClear
        style={{ width: "200px", marginLeft: '2%' }}
        value={brand}
        onChange={(e) => setBrand(e)}
        mode="multiple"
        placeholder="Filter by brand"
      >
        {products.map((item) => (
          <Select.Option value={item.brand} key={item.brand}>
            {item.brand}
          </Select.Option>
        ))}
      </Select>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        range
        defaultValue={[1, 1000]}
        min={0}
        max={1000}
        step={1}
        style={{width: '400px', marginLeft: '2%'}}
      />
    </div>
  );
};

export default Filters;