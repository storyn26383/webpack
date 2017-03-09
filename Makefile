init:
	yarn install
	make build-prod

build:
	./node_modules/.bin/webpack

build-prod:
	./node_modules/.bin/webpack -p

watch:
	./node_modules/.bin/webpack -w

clean:
	rm -rf node_modules public
