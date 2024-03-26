import performance from "../../../public/images/performance.jpg";
import Hero from "@/components/hero"


export default function PerformancePage() {
  return (
    <Hero 
      imgData={performance} 
      imgAlt="welding" 
      title="We serve high performance applications" 
    />
  );
}
