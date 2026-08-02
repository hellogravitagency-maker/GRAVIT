import re

def update_work_tsx():
    with open(r'p:\GRAVIT-main\src\components\Work.tsx', 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to add `variant` to each project in the array.
    # The current array has color1 and color2 which we can replace.
    content = re.sub(r"color1: '#ffffff',\s*color2: '#f0f0f0'", "variant: 'blue'", content, count=1)
    content = re.sub(r"color1: '#ffffff',\s*color2: '#f0f0f0'", "variant: 'yellow'", content, count=1)
    content = re.sub(r"color1: '#ffffff',\s*color2: '#f0f0f0'", "variant: 'pink'", content, count=1)
    
    # Also replace in the map function: project.color1 -> project.variant (if it exists, but I removed it)
    # Wait, earlier I added PixelCard like this:
    # <PixelCard variant="default" gap={25} speed={30} colors="#ffffff,#f0f0f0,#d1d5db" className="w-full h-full rounded-none" />
    
    content = content.replace(
        '<PixelCard variant="default" gap={25} speed={30} colors="#ffffff,#f0f0f0,#d1d5db" className="w-full h-full rounded-none" />',
        '<PixelCard variant={project.variant as any} gap={25} speed={30} className="w-full h-full rounded-none" />'
    )
    
    with open(r'p:\GRAVIT-main\src\components\Work.tsx', 'w', encoding='utf-8') as f:
        f.write(content)

update_work_tsx()
print('Work.tsx updated')
