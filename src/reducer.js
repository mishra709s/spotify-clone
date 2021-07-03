export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token:
  //   "BQBazQQWux-tsQT2cVcO-vvVKJ4XRnkUoAb2lFm7gWwPe0ttIvoFY9XoglY4N_Q3FazHTsxBRwFMf9-rLK6qbKO0aWlbxHwraBj8AVI2Aa58md1r8bna6zTD49ETMvEpLqZcHO8CzJrQvLsD15iuwLVfJnMAZCNO0EAz1Kw7p5EMSQPUO4aM",
  token: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    default:
      return state;
  }
};

export default reducer;
