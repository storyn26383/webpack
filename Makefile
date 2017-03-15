init:
	yarn install
	make build

build:
	./node_modules/.bin/webpack

watch:
	./node_modules/.bin/webpack -w

clean:
	rm -rf node_modules public
