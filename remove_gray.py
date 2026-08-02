with open(r'p:\GRAVIT-main\src\components\Services.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('#f0f0f0', '#ffffff')

with open(r'p:\GRAVIT-main\src\components\Services.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

with open(r'p:\GRAVIT-main\src\components\BorderGlow.tsx', 'r', encoding='utf-8') as f:
    content2 = f.read()

content2 = content2.replace('#f0f0f0', '#ffffff')

with open(r'p:\GRAVIT-main\src\components\BorderGlow.tsx', 'w', encoding='utf-8') as f:
    f.write(content2)

print('Replaced #f0f0f0 with #ffffff')
