import os

BIB_DIR = "_bibliography"
OUTPUT_FILE = os.path.join(BIB_DIR, "references.bib")

# Collect all .bib files except references.bib
bib_files = [
    f for f in os.listdir(BIB_DIR)
    if f.endswith(".bib") and f != "references.bib"
]

merged = ""
for fname in bib_files:
    path = os.path.join(BIB_DIR, fname)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read().strip()
        merged += f"% --- {fname} ---\n{content}\n\n"

# Write merged content
with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
    out.write(merged)

print(f"✅ Merged {len(bib_files)} files into {OUTPUT_FILE}")
