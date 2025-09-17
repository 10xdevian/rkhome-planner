
import Imageslider from "@/components/pages/imageSlider";
import Nav from "../components/pages/Nav";
import Gallery from "@/components/pages/Gallery";
import ContactForm from "@/components/pages/Contact";
import Footer from "@/components/pages/Footer";
export default function Home() {
return (
  <div>
   <div> <Nav /></div>
   <div className="mt-4">
    <Imageslider/>
   </div>
<h3 className="text-center text-5xl font-bold mt-[100px]">Our Features Gallery</h3>
   <div className="mt-[8%]">
    <Gallery/>
    </div>
    <div>
      <ContactForm/>
    </div>
    <div>
      <Footer/>
    </div>


  
  </div>
)
}
