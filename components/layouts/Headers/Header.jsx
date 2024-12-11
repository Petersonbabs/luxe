import HeaderData from "@/data/layouts/mainheader";
import CartData from "@/data/cart";
import Link from "next/link";
import "./HeaderStyle.css";
import SheetUI from "../SheetUI/SheetUI";
import { AlignRight, ShoppingCart } from "lucide-react";
import MiniSidebar from "../MiniSidebar/MiniSidebar";

export default function MainHeader() {
  const { logo, menu, actions } = HeaderData;

  return (
    <header className="">
      <nav className="container flex justify-between items-center">
        <Link className="logo" href={'/'}>
          <img src={logo} alt="Luxe By Dnbl Logo" />
        </Link>
        <div className="hidden md:flex gap-4 items-center">
          {menu?.map((item, key) => (
            <Link href={item.href} key={key}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-6 items-center text-sm">
          {actions?.map((item, key) => (
            <Link
              href={`/${item.label.toLowerCase()}`}
              key={key}
              className={`link-text ${
                item.label == "Wishlist" ? "hidden md:block" : "block"
              } `}
            >
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            </Link>
          ))}

          <Link 
            href={'/cart'}
            className="relative"
          >
            <ShoppingCart />
            <span className="absolute top-[-5px] right-[-5px] flex h-5 w-5 text-[12px] bg-black rounded-full justify-center items-center text-white p-[2px]">{CartData.items.length}</span>
          </Link>

          <div className="md:hidden flex items-center">
            <SheetUI
              trigger={<AlignRight />}
              title={"Menu"}
              content={<MiniSidebar />}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}