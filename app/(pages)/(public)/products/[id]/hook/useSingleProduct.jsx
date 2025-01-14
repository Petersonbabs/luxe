import { useProductsContext } from "@/context/ProductContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useSingleProduct = () => {
  const { getSingleProduct, singleProduct } = useProductsContext();
  const loading = false
  const { id } = useParams();
  const [ formData, setFormData ] = useState({
    id,
    size: "m",
    color: ""
  });
  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  const handleSelectSize = (size)=>{
    setFormData( {...formData, size})
    
  }
  const handleSelectColor = (size)=>{
    setFormData( {...formData, color})
  }

  return {
    singleProduct,
    formData,
    handleSelectSize,
    loading
  };
};

export default useSingleProduct;
