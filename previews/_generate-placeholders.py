#!/usr/bin/env python3
"""
Generate placeholder preview PNGs for the three templates.
Each placeholder uses the template's actual color palette so the picker UI
shows brand-correct identity from day one. Replace these files with real
screenshots before AM rollout.
"""
from PIL import Image, ImageDraw, ImageFont
import os

# Output: 1200x800 PNG, ~3:2 aspect ratio (matches typical browser screenshot)
W, H = 1200, 800

# Template palettes pulled from each tailwind.config.ts
TEMPLATES = {
    'onepage': {
        'name': 'Quick Launch',
        'tagline': 'Single-page launch site',
        'shape': 'SINGLE PAGE',
        'bg': (253, 251, 247),       # warm cream
        'surface': (255, 255, 255),
        'primary': (15, 76, 92),     # deep teal
        'accent': (227, 111, 77),    # warm coral
        'ink': (26, 35, 50),
        'ink2': (90, 107, 123),
    },
    'mainline': {
        'name': 'Mainline',
        'tagline': 'Industrial four-page brochure',
        'shape': 'FOUR PAGE',
        'bg': (255, 255, 255),
        'surface': (248, 248, 245),
        'primary': (11, 18, 32),     # deep navy
        'accent': (255, 90, 31),     # safety orange
        'ink': (11, 18, 32),
        'ink2': (74, 85, 104),
    },
    'atrium': {
        'name': 'Atrium',
        'tagline': 'Warm editorial four-page brochure',
        'shape': 'FOUR PAGE',
        'bg': (253, 251, 247),       # warm cream
        'surface': (255, 255, 255),
        'primary': (15, 76, 92),     # deep teal
        'accent': (227, 111, 77),    # warm coral
        'ink': (26, 35, 50),
        'ink2': (90, 107, 123),
    },
}


def get_font(size, bold=False):
    """Try several common font paths; fall back to default."""
    candidates = [
        '/usr/share/fonts/truetype/dejavu/DejaVu' + ('Sans-Bold' if bold else 'Sans') + '.ttf',
        '/usr/share/fonts/truetype/liberation/LiberationSans-' + ('Bold' if bold else 'Regular') + '.ttf',
        '/System/Library/Fonts/Helvetica.ttc',
    ]
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def render_placeholder(template_id, config, output_path):
    img = Image.new('RGB', (W, H), config['bg'])
    draw = ImageDraw.Draw(img)

    # Top "browser chrome" bar — gives the placeholder a hint of "this is a website"
    draw.rectangle([0, 0, W, 56], fill=config['ink'])
    # Three browser dots
    for i, x in enumerate([24, 48, 72]):
        draw.ellipse([x - 7, 21, x + 7, 35], fill=config['ink2'])
    # Faux URL bar
    draw.rounded_rectangle([110, 16, W - 24, 40], radius=4, fill=config['ink2'])

    # Mock "header" of the site
    header_y = 90
    draw.rectangle([0, header_y, W, header_y + 80], fill=config['surface'])
    # Mock logo
    draw.rectangle([60, header_y + 28, 220, header_y + 52], fill=config['primary'])
    # Mock nav links
    for i in range(4):
        x = W - 380 + i * 80
        draw.rectangle([x, header_y + 32, x + 60, header_y + 44], fill=config['ink2'])

    # Mock hero area
    hero_y = 200
    draw.rectangle([0, hero_y, W, hero_y + 360], fill=config['bg'])

    # Big headline mock (template name)
    name_font = get_font(72, bold=True)
    name_w = draw.textlength(config['name'], font=name_font)
    draw.text((W / 2 - name_w / 2, hero_y + 70), config['name'], fill=config['ink'], font=name_font)

    # Tagline
    tagline_font = get_font(28)
    tagline_w = draw.textlength(config['tagline'], font=tagline_font)
    draw.text((W / 2 - tagline_w / 2, hero_y + 165), config['tagline'], fill=config['ink2'], font=tagline_font)

    # CTA button mock — uses accent color
    btn_w, btn_h = 240, 60
    btn_x = W / 2 - btn_w / 2
    btn_y = hero_y + 240
    draw.rounded_rectangle([btn_x, btn_y, btn_x + btn_w, btn_y + btn_h], radius=8, fill=config['accent'])
    cta_font = get_font(20, bold=True)
    cta_text = 'GET STARTED'
    cta_w = draw.textlength(cta_text, font=cta_font)
    draw.text((W / 2 - cta_w / 2, btn_y + 18), cta_text, fill=(255, 255, 255), font=cta_font)

    # Mock content blocks below
    content_y = 600
    block_w = 320
    gap = 30
    start_x = (W - (block_w * 3 + gap * 2)) / 2
    for i in range(3):
        x = start_x + i * (block_w + gap)
        # Card with subtle accent line on top
        draw.rounded_rectangle([x, content_y, x + block_w, content_y + 140], radius=8, fill=config['surface'])
        draw.rectangle([x, content_y, x + block_w, content_y + 3], fill=config['accent'])
        # Content lines
        draw.rectangle([x + 20, content_y + 24, x + 200, content_y + 36], fill=config['ink'])
        draw.rectangle([x + 20, content_y + 56, x + block_w - 20, content_y + 64], fill=config['ink2'])
        draw.rectangle([x + 20, content_y + 72, x + block_w - 40, content_y + 80], fill=config['ink2'])
        draw.rectangle([x + 20, content_y + 88, x + block_w - 60, content_y + 96], fill=config['ink2'])

    # "PLACEHOLDER" watermark — clearly marks these as not real screenshots
    watermark_font = get_font(11, bold=True)
    watermark_text = f'PLACEHOLDER PREVIEW · {config["shape"]} · REPLACE BEFORE LAUNCH'
    wm_w = draw.textlength(watermark_text, font=watermark_font)
    # Draw a subtle band at the bottom of the browser chrome
    draw.rectangle([0, H - 28, W, H], fill=config['ink'])
    draw.text((W / 2 - wm_w / 2, H - 21), watermark_text, fill=(180, 180, 180), font=watermark_font)

    img.save(output_path, 'PNG', optimize=True)
    print(f'✓ {output_path} ({os.path.getsize(output_path)} bytes)')


if __name__ == '__main__':
    out_dir = os.path.dirname(os.path.abspath(__file__))
    for template_id, config in TEMPLATES.items():
        render_placeholder(template_id, config, os.path.join(out_dir, f'{template_id}.png'))
