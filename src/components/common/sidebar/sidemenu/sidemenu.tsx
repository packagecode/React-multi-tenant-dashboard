export const MENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        icon: <i className="side-menu__icon bx bx-home"></i>,
        type: "sub",
        Name: "",
        active: false,
        selected: false,
        title: "Dashboards",
        badge: "",
        badgetxt: "",
        class: "badge bg-warning-transparent ms-2",
        children: [
          {
            path: `${import.meta.env.BASE_URL}dashboards`,
            type: "link",
            active: false,
            selected: false,
            title: "DMS"
          }
        ]
      }
    ]
  },

  {
    menutitle: "WEB APPS",
    Items: [
      {
        title: "Nested Menu",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: "#",
            title: "Nested-1",
            type: "link",
            active: false,
            selected: false
          },
          {
            title: "Nested-2",
            type: "sub",
            selected: false,
            active: false,
            children: [
              {
                path: "#",
                title: "Nested-2.1",
                type: "link",
                active: false,
                selected: false
              },
              {
                path: "#",
                title: "Nested-2.2",
                type: "link",
                active: false,
                selected: false
              }
            ]
          }
        ]
      }
    ]
  }
];
