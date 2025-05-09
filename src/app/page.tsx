import { Aboutcontent } from "./components/Aboutcontent";
import { Title } from "./components/Title";

export default function AboutPage() {
  return (
    <div className="p-6">
      <Title pageName="ABOUT" />
      <Aboutcontent />
    </div>
  );
}
