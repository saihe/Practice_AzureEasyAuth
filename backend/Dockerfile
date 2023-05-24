FROM golang:1.19-bullseye as build

WORKDIR /go/src/app

ENV GO111MODULE="on"
ADD go.mod go.sum ./
RUN go mod download

ADD . /go/src/app/
RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o /go/bin/app /go/src/app/main.go

FROM alpine:latest

COPY --from=build /go/bin/app /

EXPOSE 8080
CMD ["/app"]
