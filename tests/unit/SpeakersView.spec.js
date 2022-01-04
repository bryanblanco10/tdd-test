import { shallowMount, createLocalVue } from "@vue/test-utils";
import SpeakersView from "@/views/SpeakersView";
import SearchForm from "@/components/SearchForm";
import SpeakersList from "@/components/SpeakersList";
import Vuex from "vuex";

/* Creating a localvue instance to be able to use vuex */
const localVue = createLocalVue();

/* Adding vuex to our new local Vue instance */
localVue.use(Vuex);

let speaker = {
  name: "Bryan",
};

describe("SpeakersView", () => {
  /* Creating global variables to access throung the test */
  let store, getters;

  /* executes beforeEach Test */
  beforeEach(() => {
    /* it creates a store with the desired getters */
    getters = {
      speakers: () => [speaker, speaker],
    };
    store = new Vuex.Store({
      getters,
    });
  });

  const build = () => {
    const wrapper = shallowMount(SpeakersView, {
      /* Passing the created store and the vue instance when mounting the component */
      store,
      localVue,
    });

    return {
      wrapper,
      searchForm: () => wrapper.findComponent(SearchForm),
      speakersList: () => wrapper.findComponent(SpeakersList),
    };
  };

  it("renders the component", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render the correct", () => {
    const { searchForm, speakersList } = build();

    expect(searchForm().exists()).toBeTruthy();
    expect(speakersList().exists()).toBeTruthy();
  });

  it("should passes speakers to the speakersList", () => {
    const { speakersList } = build();
    expect(speakersList().vm.speakers).toEqual([speaker, speaker]);
    expect(speakersList().vm.speakers).toBe(store.getters.speakers);
  });
});
