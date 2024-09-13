import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@/app/Images/I8.jpg";
import img2 from "@/app/Images/nivera.jpg";
import img3 from "@/app/Images/Air.jpg";
import { ProductChart } from "@/components/ui/product-chart";
import { CustomForm } from "@/components/ui/form";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-center font-bold text-3xl">Buttons</h1>
      <div className="flex justify-center gap-4 my-5 items-center">
        <Button size="default" variant="default">
          Default
        </Button>{" "}
        <Button size="lg" variant="ghost">
          Ghost
        </Button>
        <Button size="sm" variant="destructive">
          Destructive
        </Button>
        <Button size="lg" variant="link">
          Link
        </Button>{" "}
        <Button size="lg" variant="custom">
          Custom
        </Button>
      </div>
      <h1 className="text-center font-bold text-3xl">Carousel</h1>
      <div className="flex justify-center gap-4 my-10 items-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img src={img1.src} alt="Image 1" className="w-full h-auto" />
            </CarouselItem>
            <CarouselItem>
              <img src={img2.src} alt="Image 2" className="w-full h-auto" />
            </CarouselItem>
            <CarouselItem>
              <img src={img3.src} alt="Image 3" className="w-full h-auto" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <h1 className="text-center font-bold text-3xl ">Chart</h1>
      <div className="flex justify-center gap-4 my-5 items-center">
        <ProductChart />
      </div>{" "}
      <h1 className="text-center font-bold text-3xl ">Form</h1>
      <div className="flex justify-center gap-4 my-10 items-center">
        <CustomForm />
      </div>
    </div>
  );
}
