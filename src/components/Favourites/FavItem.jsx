import React, { useContext } from "react";
import { List, Button} from "antd"
import { DeleteOutlined } from "@ant-design/icons";
import { favContext } from "../../contexts/favContext";

const FavItem = ({ item }) => {
  const { deleteFromFav } = useContext(favContext);
  return (
    <List.Item
      key={item.id}
      extra={<img width={272} alt="img" src={item.item.image1} />}
    >
      <List.Item.Meta 
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{color: 'white'}}>{item.item.brand}</h3>
              <h4 style={{color: 'white'}}>{item.item.model}</h4>
            </div>
            <h3 style={{color: 'white'}}>{"$" + item.item.price}</h3>
          </div>
        }
        description={
          <>
            <div style={{color: "white" , fontSize: "18px"}}>{item.item.description}</div>
            <Button
            style={{backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '7px', height: '40px'}}
             onClick={() => deleteFromFav(item.item.id)}>
              <DeleteOutlined style={{fontSize: '30px'}}/>
            </Button>
          </>
        }
      />
    </List.Item>
  );
};

export default FavItem;