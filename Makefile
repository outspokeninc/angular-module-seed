# https://andreypopp.com/posts/2013-05-16-makefile-recipes-for-node-js.html
# https://github.com/substack/browserify-handbook#external-bundles


BIN = ./node_modules/.bin

buildlibs:
	$(BIN)/browserify -r angular -r lodash -o dist/libs.js

buildsrc:
	$(BIN)/browserify src/index.js -x angular -x lodash -o dist/bundle.js

copy:
	cp src/rest-client-data.json dist/

watchsrc:
	$(BIN)/watchify src/index.js -x angular -x lodash -o dist/bundle.js

browsersync:
	$(BIN)/browser-sync start --server --startPath demo/index.html --files "dist/*, demo/*"

build: buildlibs buildsrc copy

test: build
	$(BIN)/karma start

# run this with make -j dev
dev: watchsrc browsersync

