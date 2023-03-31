import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()],
      rules: [
        ["blur-bg", { "backdrop-filter": "blur(5px)" }],
        ["color-main-background", { color: "var(--main-background-color)" }],
        [
          "color-sidebar-background",
          { color: "var(--sidebar-background-color)" },
        ],
        ["color-sidebar-text", { color: "var(--sidebar-text-color)" }],
        ["color-sidebar-icon", { color: "var(--sidebar-icon-color)" }],
        [
          "color-sidebar-hover-selected-background",
          { color: "var(--sidebar-hover-selected-background-color)" },
        ],
        [
          "color-main-content-background",
          { color: "var(--main-content-area-background-color)" },
        ],
        ["color-title-text", { color: "var(--title-text-color)" }],
        ["color-body-text", { color: "var(--body-text-color)" }],
        ["color-table-border", { color: "var(--table-border-color)" }],
        [
          "color-table-header-background",
          { color: "var(--table-header-background-color)" },
        ],
        [
          "color-table-header-text",
          { color: "var(--table-header-text-color)" },
        ],
        ["color-link", { color: "var(--link-color)" }],
        [
          "color-button-background",
          { color: "var(--button-background-color)" },
        ],
        ["color-button-text", { color: "var(--button-text-color)" }],
        [
          "color-button-hover-selected-background",
          { color: "var(--button-hover-selected-background-color)" },
        ],
        ["color-warning", { color: "var(--warning-color)" }],
        ["color-success", { color: "var(--success-color)" }],
        ["color-error", { color: "var(--error-color)" }],
        ["color-info", { color: "var(--info-color)" }],
        [
          "card",
          {
            "background-color": "white",
            "border-radius": "10px",
            "box-shadow": "0 4px 6px rgba(0, 0, 0, 0.1)",
            margin: "0 auto",
          },
        ],
        [
          "mapbox",
          {
            width: "10wh",
            height: "350px",
          },
        ],
        [
          "page-container",
          {
            "max-width": "100%",
            "max-height": "100%",
          },
        ],

       [
    ".container",
        {
          "height": "100vh",
          "background-color": "#262626"
        }
      ],
    [
    ".navbar",
    {
      "background-color": "#262626 !important",
      "color": "white !important",
      "box-shadow": "none !important"
    }
    ],
    [
    ".form",
    {
      "margin-top": "2rem",
      "width": "90%",
      "max-width": "325px",
      "border-radius": "8px",
      "background-color": "#eeeeee",
      "padding": "1rem",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center"
    }
  ],
  [
    ".input-field",
    {
      "width": "100%",
      "margin": "0.5rem 0"
    }
  ],
  [
    ".cell",
    {
      "margin-top": "1rem",
      "width": "100%"
    }
  ],
  [
    ".btn",
    {
      "margin-top": "1rem",
      "background-color": "#262626",
      "border-color": "#262626",
      "color": "white"
    }
  ]
]
//       .container {
//   height: 100vh;
//   background-color: #262626;
// }

// .navbar {
//   background-color: #262626 !important;
//   color: white !important;
//   box-shadow: none !important;
// }

// .form {
//   margin-top: 2rem;
//   width: 90%;
//   max-width: 325px;
//   border-radius: 8px;
//   background-color: #eeeeee;
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

// .input-field {
//   width: 100%;
//   margin: 0.5rem 0;
// }

// .cell {
//   margin-top: 1rem;
//   width: 100%;
// }

// .btn {
//   margin-top: 1rem;
//   background-color: #262626;
//   border-color: #262626;
//   color: white;
// }

    }),
  ],
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         '--van-primary-color': '#262626',
  //         'blue': '#3eaf7c',
  //         'button-primary-background-color': '#3eaf7c',
  //         'button-primary-border-color': '#3eaf7c',
  //       },
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
  build: {
    chunkSizeWarningLimit: 1000000, // 将代码块大小限制增加到1MB
  },
});
