#!/bin/bash

curl -fsSL https://get.docker.com/rootless | sh

# Content to be added to .bashrc
content='export PATH="$HOME/bin:$PATH"'

# Check if content already exists in .bashrc
if grep -Fxq "$content" ~/.bashrc; then
  echo "Content for bin path already exists in .bashrc. Skipping addition."
else
  # Append content to .bashrc
  echo "$content" >> ~/.bashrc
  echo "Content for bin path added to .bashrc successfully."
fi

# Content to be added to .bashrc
dockerhost='export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock'

# Check if content already exists in .bashrc
if grep -Fxq "$dockerhost" ~/.bashrc; then
  echo "Content for dockerhost already exists in .bashrc. Skipping addition."
else
  # Append content to .bashrc
  echo "$dockerhost" >> ~/.bashrc
  echo "Content for dockerhost added to .bashrc successfully."
fi