# https://andreypopp.com/posts/2013-05-16-makefile-recipes-for-node-js.html
# https://github.com/substack/browserify-handbook#external-bundles


BIN = ./node_modules/.bin

buildlibs:
	$(BIN)/browserify -r angular -r lodash -o dist/libs.js

buildsrc:
	$(BIN)/browserify src/index.js -x angular -x lodash -o dist/bundle.js

watchsrc:
	$(BIN)/watchify src/index.js -x angular -x lodash -o dist/bundle.js


build: buildlibs buildsrc

