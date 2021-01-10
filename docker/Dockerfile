ARG NODEJS_VERSION=15
FROM node:${NODEJS_VERSION}-buster-slim

RUN apt-get update && DEBIAN_FRONTED=noninteractive apt-get install -y --no-install-recommends \
    make \
    && rm -rf /var/lib/apt/lists/*

ARG WOKRKING_PACKAGE_PATH=/working_package
ENV WOKRKING_PACKAGE_PATH=${WOKRKING_PACKAGE_PATH}
RUN mkdir -p ${WOKRKING_PACKAGE_PATH} \
    && cd ${WOKRKING_PACKAGE_PATH} \
    && npm init -y \
    && npm install -D vuepress markdown-it-plantuml

COPY offlinify.js ${WOKRKING_PACKAGE_PATH}

USER root
CMD [ "/bin/sh", "-c", "while sleep 1000; do :; done" ]