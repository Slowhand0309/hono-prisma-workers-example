#!/bin/sh

cd `dirname $0`
cd ..
sudo chown -R vscode node_modules
sudo chown -R vscode /home/vscode/.config

pnpm install
pnpm dev
