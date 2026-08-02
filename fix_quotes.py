import os
import glob

for f in ['Privacy.tsx', 'Terms.tsx', 'RefundPolicy.tsx']:
    path = os.path.join(r'p:\GRAVIT-main\src\components', f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    content = content.replace("content: '", "content: `").replace("',\n            }", "`,\n            }")
    
    with open(path, 'w', encoding='utf-8') as file:
        file.write(content)

print('Fixed quotes in all files')
