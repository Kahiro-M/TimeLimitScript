#!/bin/sh
#electron-packagerとgulpをローカルインストールしておくこと。
#npm install electron-packager --save-dev
#npm install gulp --save-dev
# ./node_modules/.bin/gulp packager-win

./node_modules/.bin/electron-packager . TimeLimitScript --platform=win32 --arch=x64 --icon=icon.ico --overwrite --asar
./node_modules/.bin/electron-packager . TimeLimitScript --platform=darwin --arch=x64 --icon=icon.ico --overwrite --asar
# ./node_modules/.bin/electron-packager . TimeLimitScript --platform=all --arch=all --icon=icon.ico --overwrite --asar
