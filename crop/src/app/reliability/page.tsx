import reliability from "../../../public/images/reliability.jpg";
import Hero from "@/components/hero"


export default function ReliabilityPage() {
  return (
    <Hero 
      imgData={reliability} 
      imgAlt="welding" 
      title="Super high reliability hosting" 
    />
  );
}