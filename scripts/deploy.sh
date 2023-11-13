#!/usr/bin/env bash

SCRIPT_DIR=$(dirname ${BASH_SOURCE[0]})

cd ${SCRIPT_DIR}/.. && yarn run build || exit
cp src/.htaccess dist
rsync -acu --del --stats dist/* tjex.net@ssh.strato.de:tjex.net
