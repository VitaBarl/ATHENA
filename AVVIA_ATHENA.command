#!/bin/zsh
cd "$(dirname "$0")"
PORT=8765
open "http://localhost:${PORT}/"
python3 -m http.server "$PORT"
