import { Shopcontent } from "../components/Shopcontent";
import { Title } from "../components/Title";

export default function ShopPage() {
  return (
    <div className="p-6 ">
      <Title pageName="SHOP" />
      <Shopcontent />
    </div>
  );
}
