(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{357:function(t,s,a){t.exports=a.p+"assets/img/edit-puml.fdf2d4fa.gif"},358:function(t,s,a){t.exports=a.p+"assets/img/use-drawio.499f2308.gif"},370:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"edit-your-doc-sites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#edit-your-doc-sites"}},[t._v("#")]),t._v(" Edit Your Doc Sites")]),t._v(" "),e("p",[t._v("This section will introduce several useful features for editing your doc sites.")]),t._v(" "),e("h2",{attrs:{id:"use-plantuml-to-create-diagrams"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-plantuml-to-create-diagrams"}},[t._v("#")]),t._v(" Use PlantUML to Create Diagrams")]),t._v(" "),e("p",[e("code",[t._v("dev-docs-template")]),t._v(" provides out-of-box support for editing "),e("a",{attrs:{href:"https://plantuml.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlantUML"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("It launch a plantuml-server container to provide PlantUML preview/export support.")]),t._v(" "),e("p",[t._v("PlantUML is a component that allows to quickly write :")]),t._v(" "),e("ul",[e("li",[t._v("Sequence diagram")]),t._v(" "),e("li",[t._v("Usecase diagram")]),t._v(" "),e("li",[t._v("Class diagram")]),t._v(" "),e("li",[t._v("Object diagram")]),t._v(" "),e("li",[t._v("Activity diagram (here is the legacy syntax)")]),t._v(" "),e("li",[t._v("Component diagram")]),t._v(" "),e("li",[t._v("Deployment diagram")]),t._v(" "),e("li",[t._v("State diagram")]),t._v(" "),e("li",[t._v("Timing diagram")])]),t._v(" "),e("p",[t._v("When we want to create such kind of diagram/image to visualize our dev project, we can simply:")]),t._v(" "),e("ol",[e("li",[t._v("In the VSCode Remote Container environment, create a .puml file")]),t._v(" "),e("li",[t._v("Run VSCode command "),e("code",[t._v("PlantUML: Preview Current Diagram")]),t._v(" to preview during editing")]),t._v(" "),e("li",[t._v("Edit your .puml file")]),t._v(" "),e("li",[t._v("Run VSCode command "),e("code",[t._v("PlantUML: Export Current Diagram")]),t._v(" to export your .puml to .svg/.png in the same directory with .puml")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(357),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"use-draw-io-to-create-any-complicated-diagrams-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-draw-io-to-create-any-complicated-diagrams-images"}},[t._v("#")]),t._v(" Use Draw.io to Create any Complicated Diagrams/Images")]),t._v(" "),e("p",[e("code",[t._v("dev-docs-template")]),t._v(" includes Draw.io VSCode Extension to provide complicated diagram edit feature within VSCode.")]),t._v(" "),e("p",[t._v("We recommended to use .svg file (with suffix "),e("code",[t._v(".drawio.svg")]),t._v(") so that no export is needed.")]),t._v(" "),e("p",[t._v("To create and edit a .svg, we can simply:")]),t._v(" "),e("ol",[e("li",[t._v("In the VSCode Remote Container environment, create a "),e("code",[t._v(".drawio.svg")]),t._v(" file")]),t._v(" "),e("li",[t._v("VSCode will automatically launch the drawio environment for svg editing")]),t._v(" "),e("li",[t._v("Edit your "),e("code",[t._v(".drawio.svg")]),t._v(" file")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(358),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"configurate-navbar-sidebar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurate-navbar-sidebar"}},[t._v("#")]),t._v(" Configurate Navbar/Sidebar")]),t._v(" "),e("p",[t._v("The default sites use VuePress default theme, which include the Navbar/Sidebar features.")]),t._v(" "),e("p",[t._v("Relative configuration file is in "),e("code",[t._v("$DOCS_RELATIVE_PATH/.vuepress/config.js")]),t._v(" ("),e("code",[t._v("$DOCS_RELATIVE_PATH")]),t._v(" defined in "),e("code",[t._v("./.env")]),t._v(", default "),e("code",[t._v("docs")]),t._v(").")]),t._v(" "),e("p",[t._v("Please check these highlighted parts")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("themeConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sidebar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        locales"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                selectText"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Languages'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                label"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'English'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                nav"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Home'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Guide'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/guide/index.html'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GitHub'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/lisy09/dev-docs-template'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                sidebar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/guide/'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n                        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Guide'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            collapsable"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            children"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getting-started'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edit-docs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build-sites'")]),t._v("\n                            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br")])]),e("p",[t._v("For further information, please check VuePress official documents about "),e("a",{attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html#navbar",target:"_blank",rel:"noopener noreferrer"}},[t._v("Navbar"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sidebar"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);