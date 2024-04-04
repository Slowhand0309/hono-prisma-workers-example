#!/bin/sh

DIRNAME=${PWD##*/}
DIRNAME=${DIRNAME:-/}

docker compose -p ${DIRNAME}_devcontainer -f .devcontainer/docker-compose.yml down
