import ProductsData from "@/data/products.json"
import ProductCard from "@/components/common/ProductCard"

const BestOfSalesIndex = ({title}) => {
  return (
    <section  className="container my-8 mx-auto">
        <h2 className="lbd-sub-text">{title}</h2>
      <section className="flex overflow-x-scroll scrolled-product">
        {ProductsData.slice(0, 5).map((product, index) => (
          <section key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <ProductCard index={index} product={product}/>
            </div>
          </section>
        ))}
      </section>
    </section>
  )
}

export default BestOfSalesIndex