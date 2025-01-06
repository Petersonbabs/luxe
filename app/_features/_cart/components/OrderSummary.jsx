import CartData from "@/data/cart.json";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const OrderSummary = () => {
    
  return (
    <section className="border rounded p-4 h-fit sticky top-16 flex-[.8]">
        <h3 className="text-2xl mb-4">Order Summary</h3>
        <ul className="space-y-4 mb-4">
            <li className="flex justify-between items-center">
                <span>Subtotal:</span>
                <span>₦{CartData?.subTotal.toLocaleString()}</span>
            </li>
            <li className="flex justify-between items-center">
                <span>Delivery Fee:</span>
                <span>₦{CartData?.deliveryFee.toLocaleString()}</span>
            </li>
            <li className="flex justify-between items-center">
                <span>Total:</span>
                <span>₦{CartData?.totalPrice.toLocaleString()}</span>
            </li>
        </ul>
        <Link href={'/checkout'} className="justify-center py-4 btn-full black-btn rounded text-center flex items-center gap-4" ><span>Checkout</span> <ArrowRight /></Link>
    </section>
  )
}

export default OrderSummary