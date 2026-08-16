import LastMagazineSlider from "@/components/ui/last-magazine-slider";
import {magazinesItems} from "@/mocks";
import LatestNews from "@/app/(home)/components/service-section";

export default function homePage(){
    return(
        <main>
            <LatestNews />
            <section className={'container mx-auto my-6'}>
                <LastMagazineSlider slides={magazinesItems}/>
            </section>
        </main>
    );
}