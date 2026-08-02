import os
import re

TARGET_DIR = r"p:\GRAVIT-main\src"

# Replace glowing colors with white or gray
REPLACEMENTS = {
    r'#ff6a39': r'#ffffff',
    r'#6e7bff': r'#ffffff',
    r'from-\[#ff6a39\]': r'from-white/10',
    r'to-\[#6e7bff\]': r'to-transparent',
    r'bg-\[#ff6a39\]': r'bg-white',
    r'text-\[#ff6a39\]': r'text-white',
    r'selection:bg-\[#ff6a39\]': r'selection:bg-white',
    r'text-orange-\d+': r'text-white',
    r'bg-orange-\d+': r'bg-white',
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    for pattern, repl in REPLACEMENTS.items():
        content = re.sub(pattern, repl, content)

    if content != original:
        print(f"Updated {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

for root, _, files in os.walk(TARGET_DIR):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
            process_file(os.path.join(root, file))

print("Color strip complete.")
