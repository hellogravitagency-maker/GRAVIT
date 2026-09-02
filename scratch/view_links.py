import os

files = [
    r"p:\GRAVIT\GRAVIT-main\src\pages\WebsiteTemplates.tsx",
    r"p:\GRAVIT\GRAVIT-main\src\pages\Websites.tsx",
    r"p:\GRAVIT\GRAVIT-main\src\pages\Services.tsx",
    r"p:\GRAVIT\GRAVIT-main\src\pages\SEOPage.tsx",
    r"p:\GRAVIT\GRAVIT-main\src\pages\Pricing.tsx",
    r"p:\GRAVIT\GRAVIT-main\src\pages\PosterDesign.tsx",
    r"p:\GRAVIT\GRAVIT-main\src\pages\Portfolios.tsx",
    r"p:\GRAVIT\GRAVIT-main\src\pages\Ecommerce.tsx",
    r"p:\GRAVIT\GRAVIT-main\src\pages\Analytics.tsx",
    r"p:\GRAVIT\GRAVIT-main\src\components\Work.tsx",
    r"p:\GRAVIT\GRAVIT-main\src\components\Navbar.tsx",
    r"p:\GRAVIT\GRAVIT-main\src\components\Footer.tsx"
]

for f in files:
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
    
    lines = content.split("\n")
    for i, line in enumerate(lines):
        if 'to="/contact"' in line:
            print(f"--- FILE: {f}")
            print(f"Line {i+1}:")
            start = max(0, i-2)
            end = min(len(lines), i+4)
            print("\n".join(lines[start:end]))
            print("...")
