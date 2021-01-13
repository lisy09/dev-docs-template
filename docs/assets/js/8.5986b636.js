(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{360:function(e,s,t){e.exports=t.p+"assets/img/quick-start.f94dff0a.gif"},372:function(e,s,t){"use strict";t.r(s);var a=t(42),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("This section will help you setup the documentation environment with dev-docs-template from ground up.")]),e._v(" "),a("h2",{attrs:{id:"prerequisite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[e._v("#")]),e._v(" Prerequisite")]),e._v(" "),a("ul",[a("li",[e._v("The environment for build needs to be linux/amd64 or macos/amd64. Windows x64 users can use wsl2 as linux environment.")]),e._v(" "),a("li",[e._v("The environemnt for build needs "),a("a",{attrs:{href:"https://docs.docker.om/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker engine installed"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("The environemnt for edit needs "),a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker compose"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("The environemnt for build needs "),a("code",[e._v("GNU make >= 3.8")]),e._v(" installed")]),e._v(" "),a("li",[e._v("Need "),a("a",{attrs:{href:"https://code.visualstudio.com/docs/setup/etup-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.scode-remote-extensionpack",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode Extension: Remote Development Extension Packs"),a("OutboundLink")],1),e._v(" installed.")])]),e._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),a("h3",{attrs:{id:"_1-clone-this-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-this-repository"}},[e._v("#")]),e._v(" 1. Clone this Repository")]),e._v(" "),a("p",[e._v("Clone this repository as your own repository or a submodule of your monolithic repository.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/lisy09/dev-docs-template\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-build-docker-images-before-editing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-build-docker-images-before-editing"}},[e._v("#")]),e._v(" 2. Build Docker Images before Editing")]),e._v(" "),a("p",[e._v("To build all docker images locally:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" all\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("(Optional) To push built docker images to the remote registry:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" push\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("(Optional) To delete built local docker images:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" clean\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Or you can check "),a("code",[e._v("./Makefile")]),e._v(" for more details.")]),e._v(" "),a("h3",{attrs:{id:"_3-create-the-base-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-the-base-documents"}},[e._v("#")]),e._v(" 3. Create the Base Documents")]),e._v(" "),a("p",[e._v("Developers can create the base documents with simply replace "),a("code",[e._v("./docs_src")]),e._v(" directory with one example in "),a("code",[e._v("./docs_example")]),e._v(", e.g.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# delete original ./docs_src directory")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf docs_src\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# copy an example docs")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" ./docs_examples/mono-data-science docs_src\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# delete original ./docs_examples")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf docs_examples\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# modify the line below of .devcontainer/docker-compose.yml to exclude mounting docs_examples")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  - ../${EXAMPLES_RELATIVE_PATH}:/${WOKRKING_PACKAGE_PATH}/${EXAMPLES_RELATIVE_PATH}:cached")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("Developers can also create the base documents from scratch with proper "),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress directory-structure"),a("OutboundLink")],1),e._v(" if familiar enough with VuePress and the source codes of this project.")]),e._v(" "),a("h3",{attrs:{id:"_4-start-the-remote-containter-environment-in-vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-start-the-remote-containter-environment-in-vscode"}},[e._v("#")]),e._v(" 4.  Start the Remote Containter Environment in VSCode")]),e._v(" "),a("p",[e._v("Run in "),a("code",[e._v("vscode")]),e._v(" and execute "),a("code",[e._v("Remote-Containers: Open Folder in Container")]),e._v(" nd select the root directory of this module.\nThen VSCode will build a dev-container and run it based on "),a("code",[e._v("./.devcontgainer/evcontainer.json")]),e._v(".\nThe whole directory will be mounted to "),a("code",[e._v("/workspace")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"_5-start-vuepress-dev-server-for-realtime-preview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-start-vuepress-dev-server-for-realtime-preview"}},[e._v("#")]),e._v(" 5. Start VuePress Dev Server for Realtime Preview")]),e._v(" "),a("p",[e._v("Run this command in the remote container.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" dev-local\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Then a VuePress dev server will be started and listened at $VUEPRESS_DEV_PORT port value defined in "),a("code",[e._v("./.env")]),e._v(", default 8080)\nAnd you can check the docs in a browser with the url localhost:$VUEPRESS_DEV_PORT`.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(360),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"build-vuepress-docs-in-vscode-remote-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-vuepress-docs-in-vscode-remote-container"}},[e._v("#")]),e._v(" Build VuePress Docs in VSCode Remote Container")]),e._v(" "),a("p",[e._v("Run this command in the remote container.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" build-local\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The built result is in "),a("code",[e._v("$DOCS_RELATIVE_PATH/.vuepress/dist")]),e._v(" (defined in "),a("code",[e._v("./.env")]),e._v(", default "),a("code",[e._v("docs_src")]),e._v(")")])])}),[],!1,null,null,null);s.default=r.exports}}]);