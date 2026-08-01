#!/usr/bin/env python3
import os
import urllib.request
import re

# Download LICENSE if not exists
license_file = "LICENSE"
if not os.path.exists(license_file):
    print("Downloading AGPLv3 License...")
    urllib.request.urlretrieve("https://www.gnu.org/licenses/agpl-3.0.txt", license_file)

header_text = """This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>."""

def format_comment(text, style):
    lines = text.split("\n")
    if style == "slash":
        return "\n".join("// " + line if line else "//" for line in lines) + "\n\n"
    elif style == "hash":
        return "\n".join("# " + line if line else "#" for line in lines) + "\n\n"
    elif style == "html":
        return "<!--\n" + text + "\n-->\n\n"
    elif style == "bat":
        return "\n".join("REM " + line if line else "REM" for line in lines) + "\n\n"
    return text

def has_license(lines):
    content = "".join(lines[:30]).lower()
    return "gnu affero general public license" in content

extensions = {
    ".cpp": "slash",
    ".h": "slash",
    ".java": "slash",
    ".js": "slash",
    ".py": "hash",
    ".sh": "hash",
    ".html": "html",
    ".bat": "bat",
    ".cmake": "hash",
    "CMakeLists.txt": "hash"
}

def process_file(filepath):
    # Exclude generated/external files
    if "/node_modules/" in filepath or "/target/" in filepath or "/build/" in filepath or "/.git/" in filepath:
        return
    if "/web_port/webapp/assets/" in filepath:
        return
    
    filename = os.path.basename(filepath)
    ext = os.path.splitext(filepath)[1]
    
    style = extensions.get(ext)
    if not style and filename in extensions:
        style = extensions[filename]
        
    if not style:
        return

    try:
        with open(filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Skipping {filepath}: {e}")
        return

    if has_license(lines):
        return

    formatted_header = format_comment(header_text, style)
    
    # Check for shebang or encoding declarations
    insert_idx = 0
    while insert_idx < len(lines):
        line = lines[insert_idx].strip()
        if line.startswith("#!") or (line.startswith("#") and "coding:" in line):
            insert_idx += 1
        elif line.startswith("<?php") or line.startswith("<!DOCTYPE"):
            insert_idx += 1
        else:
            break
            
    lines.insert(insert_idx, formatted_header)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.writelines(lines)
    print(f"Added license to {filepath}")

for root, dirs, files in os.walk("."):
    # Skip ignored dirs
    dirs[:] = [d for d in dirs if d not in [".git", "node_modules", "target", "build"]]
    for file in files:
        filepath = os.path.join(root, file)
        process_file(filepath)

print("Done.")
