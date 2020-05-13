import resolve from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"
import commonjs from "@rollup/plugin-commonjs"
import svelte from "rollup-plugin-svelte"
import babel from "rollup-plugin-babel"
import { terser } from "rollup-plugin-terser"
import config from "sapper/config/rollup.js"
import pkg from "./package.json"
import svelteSVG from "rollup-plugin-svelte-svg"
import { mdsvex } from "mdsvex"
import * as path from "path"
import hljs from "highlight.js"

const mode = process.env.NODE_ENV
const dev = mode === "development"
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const onwarn = (warning, onwarn) =>
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning)

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        extensions: [".svelte", ".mdx"],
        preprocess: mdsvex({
          extension: ".mdx",
          layout: path.join(__dirname, "./src/components/BlogLayout.svelte"),
          // parser: md => md.use(SomePlugin), // you can add markdown-it plugins if the feeling takes you
          // you can add markdown-it options here, html is always true
          markdownOptions: {
            typographer: true,
            linkify: true,
            highlight: (str, lang) => {
              if (lang && hljs.getLanguage(lang)) {
                try {
                  return hljs.highlight(lang, str).value
                } catch (err) {
                  console.error(err)
                }
              }
              return "" // use external default escaping
            },
          },
        }),
      }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),
      svelteSVG({ dev }),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          runtimeHelpers: true,
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead",
              },
            ],
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        generate: "ssr",
        dev,
        extensions: [".svelte", ".mdx"],
        preprocess: mdsvex({
          extension: ".mdx",
          layout: path.join(__dirname, "./src/components/BlogLayout.svelte"),
          // parser: md => md.use(SomePlugin), // you can add markdown-it plugins if the feeling takes you
          // you can add markdown-it options here, html is always true
          markdownOptions: {
            typographer: true,
            linkify: true,
            highlight: (str, lang) => {
              if (lang && hljs.getLanguage(lang)) {
                try {
                  return hljs.highlight(lang, str).value
                } catch (err) {
                  console.error(err)
                }
              }
              return "" // use external default escaping
            },
          },
        }),
      }),
      svelteSVG({ dev, generate: "ssr" }),
      resolve({
        dedupe: ["svelte"],
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives")),
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    onwarn,
  },
}
