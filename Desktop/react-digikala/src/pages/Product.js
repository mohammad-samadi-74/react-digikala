import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navigation from "../components/header/Navigation";
import SingleProduct from "../components/content/SingleProduct";
import "../css/content/SingleProduct.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

function Product(props) {
  const [product, setProduct] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  let productName = searchParams.get("name");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/Api/Product.php?name=${productName}`)
      .then((res) => {
        console.count("aaa");
        if (res.data.status === "success") {
          setProduct(res.data.product);
        } else {
          navigate("/notfound");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="product">
      {!product ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <Navigation login={props.login} logoutUser={props.logoutUser} />
          <SingleProduct {...product} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Product;
