import { shallowMount } from "@vue/test-utils";
import List from "@/components/List.vue";
import getData from "@/mixins/getData";

window.alert = jest.fn();
describe("list.vue", () => {
  it("check if no data renders No Data text", () => {
    const wrapper = shallowMount(List, {
      data() {
        return {
          data: [],
        };
      },
    });
    expect(wrapper.find(".no-data").exists()).toBeTruthy();
    expect(wrapper.find(".no-data").text()).toEqual("No Data");
  });

  it("Check if list renders with data", () => {
    window.alert.mockClear();
    jest.mock(getData);
    getData.mockResolvedValue({
      data: [
        {
          userId: 5,
          id: 1,
          title: "title 1",
          body: "this is body 1",
        },
        {
          userId: 2,
          id: 2,
          title: "title 2",
          body: "this is body 2",
        },
      ],
      count: 2,
    });
    const wrapper = shallowMount(List, {
      data() {
        return {};
      },
    });
    expect(wrapper.find(".list").exists()).toBeTruthy();
  });
});
