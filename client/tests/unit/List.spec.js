import { shallowMount } from "@vue/test-utils";
import List from "@/components/List.vue";

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
    const wrapper = shallowMount(List, {
      data() {
        return {
          listData: [
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
        };
      },
    });
    expect(wrapper.find(".list").exists()).toBeTruthy();
  });
});
