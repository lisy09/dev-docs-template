# dev-docs-template

Origin: https://github.com/lisy09/dev-docs-template

This is a project to provide a toolbox/template and some samples for easily creating the development documents.

It provide these features:
- Major documents drafted in Markdown, generated as a single static html sites (with VuePress)
- Support export the document as a single pdf file
- Building the docs only depends on docker and Gnu Make
- Editing the docs depends on
  - VSCode
  - VSCode Remote Container Extension
  - Docker engine
- PlantUML in Markdown for creating some diagram with UML
- Create more complicated diagrams & images by draw.io inside VSCode
- Several docs template

For further docs about this project, please check `./docs/index.html`

## Quick Start

### Prerequisite

- The environment for build needs to be linux/amd64 or macos/amd64
- The environemnt for build needs [docker engine installed](https://docs.docker.com/engine/install/)
- The environemnt for build needs GNU `make` > 3.8 installed

### Build command

To build all docker images locally:
```bash
make all
```

To push built docker images to the remote registry:
```bash
make push
```

To delete built local docker images:
```bash
make clean
```

Or you can check `./Makefile` for more details.

## How to run

### Prerequisite

- The environment for build needs to be linux/amd64 or macos/amd64
- The environemnt for build needs [docker engine installed](https://docs.docker.com/engine/install/)
- The environemnt for build needs GNU `make` > 3.8 installed
- Need [VSCode installed](https://code.visualstudio.com/docs/setup/setup-overview) and the [VSCode Extension: Remote Development Extension Packs](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) installed.
- Already run `make all` as last session mentioned.

### Step 1. Start the Remote Containter Environment in VSCode

You can run in `vscode` and execute `Remote-Containers: Open Folder in Container` and select the root directory of this module.
Then VSCode will build a dev-container and run it based on `./.devcontgainer/devcontainer.json`.
The whole directory will be mounted to `/workspace`.

### Step 2. Start VuePress Dev Server for Realtime Preview

Run this command in the remote container.
Then a VuePress dev server will be started and listened at $VUEPRESS_DEV_PORT (port value defined in `./.env`, default 8080)
And you can check the docs in a browser with the url `localhost:$VUEPRESS_DEV_PORT`.

```bash
make dev-local
```

### Build VuePress Docs in VSCode Remote Container

Run this command in the remote container.

```bash
make build-local
```

The built result is in `$DOCS_RELATIVE_PATH/.vuepress/dist` (defined in `./.env`, default `docs`)

## Edit a svg file