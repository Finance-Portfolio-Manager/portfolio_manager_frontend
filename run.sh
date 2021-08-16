#!/bin/sh
docker stop finportman-app 2> /dev/null
npm run build
docker build -t dev/finportman-app .
docker run \
    -d \
    --rm \
    --network="host" \
    --name finportman-app \
    dev/finportman-app
docker rmi -f $(docker images -f "dangling=true" -q) 2> /dev/null
chromium http://localhost/chart
