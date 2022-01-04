import { shallowMount } from "@vue/test-utils";
import SpeakersList from "@/components/SpeakersList";
import Speaker from "@/components/Speaker";

describe("SpeakersList", () => {
  let props;
  let speaker = {
    username: "@bryan",
    name: "Bryan",
  };

  beforeEach(() => {
    props = {
      speakers: [speaker],
    };
  });

  const build = () => {
    const wrapper = shallowMount(SpeakersList, {
      propsData: props,
    });
    return {
      wrapper,
      Speakers: () => wrapper.findAllComponents(Speaker),
    };
  };

  it("should render the component", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render the correct", async () => {
    const { wrapper, Speakers } = build();
    expect(Speakers().length).toBe(1);
    await wrapper.setProps({
      speakers: [
        speaker,
        {
          ...speaker,
          username: "@username",
        },
      ],
    });
    expect(Speakers().length).toBe(2);
  });

  it("should send speaker data to the childs", () => {
    const { Speakers } = build();
    expect(Speakers().at(0).vm.speaker).toBe(speaker);
  });
});
