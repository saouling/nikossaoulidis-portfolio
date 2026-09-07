#!/usr/bin/env python3
"""Local dev server for the portfolio. Same as `python3 -m http.server`,
except every response carries Cache-Control: no-store, so the browser
always fetches the current file from disk -- no stale-image or
stale-CSS surprises while iterating locally."""
import http.server
import os
import sys


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    # Port comes from PORT (set by the preview tool's autoPort), never a
    # hardcoded flag -- falls back to 8000 for a manual, non-tool run.
    port = int(os.environ.get("PORT", 8000))
    directory = sys.argv[1] if len(sys.argv) > 1 else "."
    handler = lambda *args, **kwargs: NoCacheHandler(*args, directory=directory, **kwargs)
    http.server.ThreadingHTTPServer(("", port), handler).serve_forever()
