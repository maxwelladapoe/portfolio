import {shallowMount} from "@vue/test-utils";
import Carousel from "../components/Carousel";

let wrapper = null;


beforeEach(()=>{
    wrapper = shallowMount(Carousel);
});


afterEach(()=>{
    wrapper.destroy;
});

describe("Carousel",()=>{

    it("renders a carousel", ()=>{
        const carousel = wrapper.findAll(".carousel");

        expect(carousel.length).toBe(1)
    });

})