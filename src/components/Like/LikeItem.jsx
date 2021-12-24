import React, { useContext } from "react";
import { List, Button} from "antd"
import { DeleteOutlined } from "@ant-design/icons";
import { likeContext } from "../../contexts/likeContext";

const LikeItem = ({ item }) => {
  const { deleteFromLike } = useContext(likeContext);
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
            <h1 style={{color: 'white'}}>{"$" + item.item.price}</h1>
          </div>
        }
        description={
          <>
            <div style={{color: "white" , fontSize: "18px"}}>{item.item.description}</div>

            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "20px",
              }}>
            </div> */}
            <Button
            style={{backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '7px', height: '40px'}}
             onClick={() => deleteFromLike(item.item.id)}>
              <DeleteOutlined style={{fontSize: '30px'}}/>
            </Button>
          </>
        }
      />
    </List.Item>
  );
};

export default LikeItem;