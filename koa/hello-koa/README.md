# Hello koa

A simple koa project. Test on macOS Catalina Version 10.15.7.

## Run

Run the project:

```shell
npm i koa
./run.sh &
```

## View
Please open localhost:3000 with your browser to view the client interface

## Stop

Stop the project process:

```shell
kill -9 $(lsof -t -i:3000)
```