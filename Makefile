ifneq (,$(wildcard ./.env))
    include .env
    export
endif

BUILD_SCRIPTS_PATH = ./build_scripts
RUN_SCRIPTS_PATH = ./run_scripts

.PHONY: all
all: base 

.PHONY: base
base:
	bash $(BUILD_SCRIPTS_PATH)/build_base.sh

.PHONY: clean
clean: delete-docker-images

.PHONY: delete-docker-images
delete-docker-images:
	bash $(BUILD_SCRIPTS_PATH)/delete_local_images.sh 

.PHONY: push
push:
	bash $(BUILD_SCRIPTS_PATH)/push_docker_images.sh 

.PHONY: dev-local
dev-local:
	bash $(RUN_SCRIPTS_PATH)/vuepress_dev_local.sh

.PHONY: build-local
build-local:
	bash $(RUN_SCRIPTS_PATH)/vuepress_build_local.sh 