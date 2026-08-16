import LastMagazineSlider from "@/components/ui/last-magazine-slider";
import {magazinesItems} from "@/mocks";

export default function homePage(){
    return(

       <section className={'container mx-auto my-6'}>
           <LastMagazineSlider slides={magazinesItems}/>
       </section>
    );
}