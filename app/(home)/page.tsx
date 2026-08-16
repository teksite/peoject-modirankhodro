import LastMagazineSlider from "@/components/ui/last-magazine-slider";
import {magazinesItems} from "@/mocks";
import ServiceSection from "@/app/(home)/components/service-section";

export default function homePage() {
    return (
        <main>
            <section className="container mx-auto my-6">
                <ServiceSection/>
            </section>
            <section className={'container mx-auto my-6'}>
                <LastMagazineSlider slides={magazinesItems}/>
            </section>
        </main>
    );
}