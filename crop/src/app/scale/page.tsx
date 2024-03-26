import scale from "../../../public/images/scale.jpg";
import Hero from "@/components/hero"


export default function ScalePage() {
  return (
    <Hero 
      imgData={scale} 
      imgAlt="steel factory" 
      title="Scale your app to infinity." 
    />
  );
}