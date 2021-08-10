#!/bin/sh
docker stop finportman-app 2> /dev/null
# export REACT_APP_API_URL=http://localhost:8082
npm run build
# docker build -t dev/finportman-app-dev -f Dockerfile-dev .
docker build -t dev/finportman-app .
docker run \
    -d \
    --rm \
    --network="host" \
    --name finportman-app \
    dev/finportman-app
docker rmi -f $(docker images -f "dangling=true" -q) 2> /dev/null
