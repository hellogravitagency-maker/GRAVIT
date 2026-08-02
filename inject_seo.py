import os
import re

components_dir = r"p:\GRAVIT-main\src\components"

files_to_update = {
    "Home.tsx": {
        "title": "Gravit Agency | We Shape Digital Realities",
        "description": "A premium digital agency specializing in immersive 3D experiences, spatial computing, and high-performance web applications."
    },
    "Work.tsx": {
        "title": "Our Work",
        "description": "Explore our portfolio of high-performance web applications, 3D experiences, and digital platforms."
    },
    "CaseStudy.tsx": {
        # Dynamic, we will inject a dynamic one manually or handle it differently.
        # Actually, let's inject a static one first and then replace it inside the file for dynamic.
        "dynamic": True
    },
    "Thoughts.tsx": {
        "title": "The Lab | Thoughts & Insights",
        "description": "Insights on spatial computing, web architecture, and design engineering from the Gravit team."
    },
    "Article.tsx": {
        "dynamic": True
    },
    "Services.tsx": {
        "title": "Services",
        "description": "Our core capabilities across Strategy, Engineering, and Spatial Computing."
    },
    "Agency.tsx": {
        "title": "The Agency",
        "description": "We are a tight-knit collective of digital craftsmen building the next web."
    },
    "Pricing.tsx": {
        "title": "Pricing & Engagement Models",
        "description": "Transparent pricing for our digital services, retainers, and enterprise solutions."
    },
    "Contact.tsx": {
        "title": "Contact Us",
        "description": "Ready to build your own reality? Get in touch with Gravit Agency."
    }
}

for filename, metadata in files_to_update.items():
    filepath = os.path.join(components_dir, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} - not found.")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already imported
    if "import SEO from" in content:
        print(f"Skipping {filename} - SEO already imported.")
        continue

    # 1. Add import statement
    import_stmt = "import SEO from './SEO';\n"
    # Find the last import statement
    import_matches = list(re.finditer(r'^import .*;', content, re.MULTILINE))
    if import_matches:
        last_import = import_matches[-1]
        insert_pos = last_import.end()
        content = content[:insert_pos] + "\n" + import_stmt + content[insert_pos:]
    else:
        content = import_stmt + content

    # 2. Inject <SEO ... /> right after the main return container
    # We look for something like `return (\n    <div` or `return (\n      <main`
    
    # Simple regex to find return (<div or <main or <section
    pattern = r'(return\s*\(\s*<[a-zA-Z]+[^>]*>)'
    
    if metadata.get("dynamic"):
        if filename == "CaseStudy.tsx":
            seo_tag = '\n      <SEO title={`${project.title} | Case Study`} description={project.challenge} image={project.heroImage} />'
        elif filename == "Article.tsx":
            seo_tag = '\n      <SEO title={`${article.title} | The Lab`} description={`Read about ${article.title} by Gravit Agency`} image={article.img} />'
    else:
        title = metadata["title"]
        desc = metadata["description"]
        seo_tag = f'\n      <SEO title="{title}" description="{desc}" />'
    
    match = re.search(pattern, content)
    if match:
        insert_pos = match.end()
        content = content[:insert_pos] + seo_tag + content[insert_pos:]
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filename}")
    else:
        print(f"Could not find return statement in {filename}")
