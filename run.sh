#!/bin/sh
docker stop finportman-app-dev
npm run dev
docker build -t dev/finportman-app-dev -f Dockerfile-dev .
docker run \
    -d \
    --rm \
    --network="host" \
    --name finportman-app-dev \
    dev/finportman-app-dev
docker rmi -f $(docker images -f "dangling=true" -q)
