#!/usr/bin/env bash

SCRIPT_DIR=$(dirname ${BASH_SOURCE[0]})

cd ${SCRIPT_DIR}/.. && yarn run build || exit
rsync -ac --stats tjex.net@ssh.strato.de:tjex.net || exit
