import {shallowMount} from "@vue/test-utils";
import Carousel from "@/components/Carousel";

let wrapper = null;


beforeEach(()=>{
    wrapper = shallowMount(Carousel,{
        propsData:{
            images:[],
            initialIndex:0
        }
    });

});


afterEach(()=>{
    wrapper.destroy;
});

describe("Carousel",()=>{

    it("renders a carousel", ()=>{
        const carousel = wrapper.findAll(".carousel");
        expect(carousel.length).toBe(1)
    });


    it("renders a left and right button", ()=>{
        const left = wrapper.findAll(".left");
        const right = wrapper.findAll(".right");
        expect(left.length).toBe(1);
        expect(right.length).toBe(1);
    });

    it("renders a left and right arrows", ()=>{
        const arrowWrap = wrapper.findAll(".arrow-wrap");
        expect(arrowWrap.length).toBe(2);
    });

    it("renders a display area",()=>{
        const displayArea = wrapper.findAll(".display-area");
        const shapeBackground = wrapper.findAll(".shape-bg");
        const image = wrapper.findAll(".image");
        const description = wrapper.findAll(".description");
        expect(displayArea.length).toBe(1);
        expect(shapeBackground.length).toBe(1);
        expect(image.length).toBe(1);
        expect(description.length).toBe(1);

        expect(wrapper.findAll('.img').length).toBe(1);
        expect(wrapper.findAll('p').length).toBe(3);
    })

    it('renders a summary progress',()=>{
        const summary = wrapper.find(".summary");
        expect(summary.text()).toBe("1 of "+ wrapper.props('images').length);
    })



})