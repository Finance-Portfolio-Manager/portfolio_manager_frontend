#!/bin/sh
docker stop finportman-app-dev
npm run build-dev
# docker build -t dev/finportman-app-dev -f Dockerfile-dev .
docker build -t dev/finportman-app .
docker run \
    -d \
    --rm \
    --network="host" \
    --name finportman-app \
    dev/finportman-app
docker rmi -f $(docker images -f "dangling=true" -q)
