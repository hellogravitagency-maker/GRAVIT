import os

with open('src/components/Services.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

pricing_tiers = lines[14:74]
pricing_card = lines[106:198]
pricing_section = lines[584:862]

with open('src/components/Pricing.tsx', 'w', encoding='utf-8') as f:
    f.write("import React, { useState, useRef } from 'react';\n")
    f.write("import { motion } from 'motion/react';\n")
    f.write("import { useNavigate } from 'react-router-dom';\n")
    f.write("import { GlowingEffect } from './ui/glowing-effect';\n")
    f.write("import SpecularButton from './SpecularButton';\n")
    f.write("import { cn } from '../lib/utils';\n\n")
    f.writelines(pricing_tiers)
    f.write('\n')
    f.writelines(pricing_card)
    f.write('\nexport default function Pricing() {\n')
    f.write("  const [billingCycle, setBillingCycle] = useState<'amc' | 'mmc'>('amc');\n")
    f.write("  const navigate = useNavigate();\n\n")
    f.write("  return (\n")
    f.write('    <div className="w-full max-w-full overflow-x-clip bg-transparent text-white font-sans pt-20">\n')
    f.writelines(pricing_section)
    f.write("    </div>\n  );\n}\n")

new_services_lines = lines[:14] + lines[74:106] + lines[198:211] + lines[212:215] + lines[222:584] + lines[862:]

with open('src/components/Services.tsx', 'w', encoding='utf-8') as f:
    f.writelines(new_services_lines)
