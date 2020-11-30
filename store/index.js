import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      scroll_val: 0,
      tab_menu: ["Top picks", "Nearby", "On a budget", "Now opened"],
      current_tab: "Top picks",
      top_picks: [
        {
          id: 0,
          title: "The 10 best hang out spots right now",
          image:
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
          id: 1,
          title: "The 10 best hang out spots right now",
          image:
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        },
        {
          id: 2,
          title: "The 10 best hang out spots right now",
          image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
          id: 3,
          title: "The 10 best hang out spots right now",
          image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
          id: 4,
          header: "The 10 best hang out spots right now",
          image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
          id: 5,
          title: "The 10 best hang out spots right now",
          image:
            "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
          id: 6,
          title: "The 10 best hang out spots right now",
          image:
            "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=800"
        },
        {
          id: 7,
          title: "The 10 best hang out spots right now",
          image:
            "https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80"
        },
        {
          id: 8,
          title: "The 10 best hang out spots right now",
          image:
            "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
        },
        {
          id: 9,
          title: "The 10 best hang out spots right now",
          image:
            "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
          id: 10,
          header: "The 10 best hang out spots right now",
          image:
            "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
      ],
      recently_reviewed: [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          title: "Gold bistro",
          tags: ["Restaurants", "Bar", "Cocktail"],
          stars: 5,
          reviews: [
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review"
          ]
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          title: "Seafood  King",
          tags: ["Restaurants", "Bar", "Cocktail"],
          stars: 4,
          reviews: [
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review"
          ]
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
          title: "Ocean basket",
          tags: ["Restaurants", "Bar", "Cocktail"],
          stars: 5,
          reviews: [
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review"
          ]
        },
        {
          id: 4,
          image:
            "https://images.unsplash.com/photo-1468730533502-216da872eab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          title: "Steak house",
          tags: ["Restaurants", "Bar", "Cocktail"],
          stars: 5,
          reviews: [
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review"
          ]
        },
        {
          id: 5,
          image:
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
          title: "Milo's parler",
          tags: ["Restaurants", "Bar", "Cocktail"],
          stars: 4,
          reviews: [
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review"
          ]
        },
        {
          id: 6,
          image:
            "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          title: "The basic kitchen",
          tags: ["Restaurants", "Bar", "Seafood"],
          stars: 4,
          reviews: [
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review",
            "this is a review"
          ]
        }
      ]
    },
    mutations: {
      setCurrentTab(state, data) {
        state.current_tab = data;
      },
      updateScrollVal(state, data) {
        state.scroll_val = data;
      }
    },
    actions: {
      setCurrentTabAction(vuexContext, data) {
        vuexContext.commit("setCurrentTab", data);
      },
      updateScrollValAction(vuexContext, data) {
        vuexContext.commit("updateScrollVal", data);
      }
    },
    getters: {
      current_tab(state) {
        return state.current_tab;
      },
      tab_menu(state) {
        return state.tab_menu;
      },
      top_picks(state) {
        return state.top_picks;
      },
      recently_reviewed(state) {
        return state.recently_reviewed;
      },
      scroll_value(state) {
        return state.scroll_val;
      }
    }
  });
};

export default createStore;
