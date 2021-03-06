import React from "react";
import SingleProduct from "./SingleProduct";
import { useNavigate,Link } from 'react-router-dom';
import productsService from "../services/ProductService";
import { Button,Grid } from "@material-ui/core";
import userService from "../services/UserService";
import ClipLoader from "react-spinners/ClipLoader";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner'
import "./Product2.css"

import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0;
`;

const Product = (props) => {
  let [loading, setLoading] = React.useState(true);
  let [color, setColor] = React.useState("");

  const [products, setProducts] = React.useState([]);
  console.log("inside");
  const getData = () => {
    productsService
      .getProduct()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);

  const navigate = useNavigate();
  const handleNewProduct = () => {
    console.log(props);
    navigate("./new", { replace: true });
    <Link to="/products/new">add new product</Link>;
  };

  return (
    <div style={{ marginTop: "-10px" }}>
      <h1>products</h1>
      {loading ? (
        <ThreeDots color={"red"} height={100} width={200} css={override}/>
      ) : (
        <div>
          {products.length == 0 ? (
            <p style={{ marginTop: "50px" }}>there are no products</p>
          ) : (
            <p style={{ marginTop: "50px" }}></p>
          )}

          {userService.isAdmin() && (
            <div className="AddNewProductDiv">
              <Button
                variant="contained"
                color="primary"
                onClick={handleNewProduct}
                className="AddNewProductButton"
              >
                Add new product
              </Button>
            </div>
          )}

          <div className="">
            <Grid container spacing={1}>
              {products.map((product, index) => (
                <div>
                  <SingleProduct
                    key={index}
                    product={product}
                    onDelete={getData}
                  />
                </div>
              ))}
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};
export default Product;
//6 12 version

// import React from "react";
// import SingleProduct from "./SingleProduct";
// import { useNavigate,Link } from 'react-router-dom';
// import productsService from "../services/ProductService";
// import { Button,Grid } from "@material-ui/core";
// import userService from "../services/UserService";


// const Product = (props) => {
    
//     const [products, setProducts] = React.useState([]);
//     console.log("inside");
//     const getData = () => {
//         productsService
//         .getProduct()
//         .then((data) => {
//             setProducts(data);
//         })
//         .catch((err)  => {
//             console.log(err);
//         });
//     };
//     React.useEffect(getData,[]);

//     const navigate = useNavigate();
//     const handleNewProduct = () => {
//         console.log(props);
//         navigate('./new', { replace: true });
//         <Link to="/products/new">add new product</Link>
// }

//     return (
//       <div style={{marginTop: "-10px"}}>
//         <h1>products</h1>
//         {products.length == 0 ? (
//           <p style={{marginTop: "50px"}}>there are no products</p>
//         ) : (
//           <p style={{marginTop: "50px"}}></p>
//         )}
        
//         {userService.isAdmin() && (
//         <div className="AddNewProductDiv">
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleNewProduct}
//             className="AddNewProductButton"
//           >
//             Add new product
//           </Button>
//         </div>
//         )}

//         <div className="">
//           <Grid container spacing={1}>
//             {products.map((product, index) => (
//               <div>
//                 <SingleProduct
//                   key={index}
//                   product={product}
//                   onDelete={getData}
//                 />
//               </div>
//             ))}
//           </Grid>
//         </div>
//       </div>
//     );
// };
// export default Product;



// import React from "react";
// import SingleProduct from "./SingleProduct";
// import { useNavigate,Link } from 'react-router-dom';
// import productsService from "../services/ProductService";
// import { Button,Grid } from "@material-ui/core";


// const Product = (props) => {
    
//     const [products, setProducts] = React.useState([]);
//     console.log("inside");
//     const getData = () => {
//         productsService
//         .getProduct()
//         .then((data) => {
//             setProducts(data);
//         })
//         .catch((err)  => {
//             console.log(err);
//         });
//     };
//     React.useEffect(getData,[]);

//     const navigate = useNavigate();
//     const handleNewProduct = () => {
//         console.log(props);
//         navigate('./new', { replace: true });
//         <Link to="/products/new">add new product</Link>
// }

//     return (
//     <div>
//         <h1>products</h1>
//             {products.length == 0? 
//             <p>there are no products</p>:
//             <p>folowing are the products</p>       
//             }
//             <div className="AddNewProductDiv">
//                     <Button variant="contained" color="primary" onClick={handleNewProduct} className="AddNewProductButton">
//                         Add new product
//                     </Button>
//             </div>
//             <div className="">
//                         {products.map((product,index) => (
//                             <div>
//                                 <SingleProduct key={index} product={product} onDelete={getData} />
//                             </div>
//                         ))}
//          </div>
//     </div>
//     );
// };
// export default Product;