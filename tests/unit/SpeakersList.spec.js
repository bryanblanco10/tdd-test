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

  const wrapper = shallowMount(SpeakersList, {
    propsData: props,
  });

  const build = () => {
    return {
      wrapper,
      Speakers: () => wrapper.findAllComponents(Speaker),
    };
  };

  it("should render the component", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render the correct", () => {
    const { wrapper, Speakers } = build();
    console.log(Speakers().length)
    expect(Speakers().length).toBe(1);
    wrapper.setProps({
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
});
