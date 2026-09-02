import os
import re

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

link_regex = re.compile(r'<Link(\s+[^>]*)?to="/contact"([^>]*)>(.*?)</Link>', re.DOTALL)

for f in files:
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
    
    def repl(m):
        attrs1 = m.group(1) or ''
        attrs2 = m.group(2) or ''
        inner = m.group(3)
        
        # Check if the inner text looks like 'Get Started', 'Contact', 'Contact Us' etc, 
        # and replace with 'Initiate Project' if it's a generic CTA.
        # Otherwise keep the inner content, but we are asked to replace with 'Initiate Project'
        
        # Let's just blindly replace text that looks like a text node without HTML tags,
        # or just change the outer tags and keep the styling.
        # The user requested "replace http://localhost:3005/contact with [Initiate Project](https://cal.com/gravitstudio/project-call)"
        # So we should probably change text to "Initiate Project" if it's purely text.
        
        # Let's reconstruct as an anchor tag
        # The attributes in `<Link>` might include `onClick={...}` or `className="..."`. We preserve them.
        new_tag = f'<a{attrs1}href="https://cal.com/gravitstudio/project-call" target="_blank" rel="noopener noreferrer"{attrs2}>'
        
        # If inner is just text (no tags except maybe a span or arrow), we could replace the text.
        # But to be safe and simple, let's replace inner text if it contains typical CTA words, or just replace it all if it's text.
        # Actually, let's keep `inner` and just replace the text inside it using a regex.
        inner = re.sub(r'(Get Started|Contact Us|Contact|Let\'s Talk|Start a Project|Start Project)', 'Initiate Project', inner, flags=re.IGNORECASE)
        
        return new_tag + inner + '</a>'
        
    new_content = link_regex.sub(repl, content)
    
    if new_content != content:
        with open(f, "w", encoding="utf-8") as file:
            file.write(new_content)
        print(f"Updated {f}")
