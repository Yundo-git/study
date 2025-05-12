import { Aboutcontent } from "./components/about/Aboutcontent";
import { Title } from "./components/Title";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Title pageName="ABOUT" />
      <main className="flex-grow flex flex-col">
        <Aboutcontent />
      </main>
    </div>
  );
}
