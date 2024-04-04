FROM node:20.10.0-bullseye-slim
LABEL maintainer="Slowhand0309"

ARG username=vscode
ARG useruid=1001
ARG usergid=${useruid}

RUN set -ex \
    && apt-get update \
    && apt-get install -y \
        sudo \
        --no-install-recommends \
    && groupadd --gid ${usergid} ${username} \
    && useradd -s /bin/bash --uid ${useruid} --gid ${usergid} -m ${username} \
    && echo ${username} ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/${username} \
    && chmod 0440 /etc/sudoers.d/${username}

USER ${username}