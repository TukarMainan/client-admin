const initialState = {
  reports: [
    {
      id: 1,
      UserId: 2,
      User: {
        email: "zblteq@gmail.com",
        username: "zblteq",
        status: "active",
      },
      PostId: 52,
      Post: {
        id: 2,
        title: "Minat tukar dengan Ebel Kobra",
        description: "Yok, tuker ebel cobra",
        status: "open",
        createdAt: "2022-12-20",
        images: [
          "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
          "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
        ],
      },
      message: "kok bisa jual ebel kobra?",
    },
    {
      id: 2,
      UserId: 2,
      User: {
        email: "zblteq@gmail.com",
        username: "zblteq",
        status: "active",
      },
      PostId: 52,
      Post: {
        id: 3,
        title: "Minat tukar robot gedeg",
        description: "Yok, tuker ebel cobra",
        status: "open",
        createdAt: "2022-12-20",
      },
      message: "jual barang terlarang",
    },
  ],
};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchReported":
      return {
        ...state,
        reports: action.payload,
      };
    default:
      return state;
  }
};

export default reportReducer;
