import os
import math
import zlib
import struct

def make_png(width, height, get_pixel):
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0)  # Filter type 0: None
        for x in range(width):
            r, g, b, a = get_pixel(x, y, width, height)
            raw_data.extend([int(r), int(g), int(b), int(a)])
    
    def chunk(tag, data):
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)
    
    header = b'\x89PNG\r\n\x1a\n'
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)) # RGBA 8-bit
    idat = chunk(b'IDAT', zlib.compress(bytes(raw_data), 9))
    iend = chunk(b'IEND', b'')
    return header + ihdr + idat + iend

def draw_icon_pixel(x, y, width, height):
    # Normalized coords 0.0 to 1.0
    nx = x / float(width)
    ny = y / float(height)

    # Rounded rectangle background: Navy #0F2942
    # Radius ~ 0.22
    rx = min(nx, 1.0 - nx)
    ry = min(ny, 1.0 - ny)
    corner_r = 0.22
    
    in_box = True
    if rx < corner_r and ry < corner_r:
        dx = corner_r - rx
        dy = corner_r - ry
        if (dx*dx + dy*dy) > (corner_r * corner_r):
            in_box = False
    
    if not in_box:
        return (0, 0, 0, 0)
    
    # Base background: Navy #0F2942
    bg_r, bg_g, bg_b, bg_a = 15, 41, 66, 255

    # Water droplet shape
    # Center x: 0.5
    # Bottom round center at (0.5, 0.58), radius ~ 0.24
    # Tip at (0.5, 0.20)
    # Check if inside teardrop / droplet
    in_drop = False
    dx = nx - 0.5
    
    # Lower circle
    cy = 0.58
    cr = 0.24
    if ny >= cy:
        if (dx*dx + (ny - cy)*(ny - cy)) <= (cr * cr):
            in_drop = True
    else:
        # Top triangle tapering up to (0.5, 0.20)
        # Linear slope: width increases as ny goes from 0.20 to 0.58
        if ny >= 0.20:
            allowed_half_w = cr * ((ny - 0.20) / (cy - 0.20))
            if abs(dx) <= allowed_half_w:
                in_drop = True

    if in_drop:
        # Drop color: primary Blue #1E70B8
        r, g, b = 30, 112, 184
        
        # Inner droplet light reflection / highlight
        if dx < -0.04 and ny > 0.35 and ny < 0.70:
            # Sky Blue #38BDF8
            r, g, b = 56, 189, 248
        
        # Sensor pulse gold dot at top right (nx=0.68, ny=0.32), radius 0.10
        dot_dx = nx - 0.68
        dot_dy = ny - 0.32
        if (dot_dx*dot_dx + dot_dy*dot_dy) <= (0.10 * 0.10):
            # Amber Gold #D97706
            r, g, b = 217, 119, 6
            # White cross center
            if abs(dot_dx) < 0.025 or abs(dot_dy) < 0.025:
                r, g, b = 255, 255, 255

        return (r, g, b, 255)
    
    # Outside droplet, check sensor gold dot on the navy background
    dot_dx = nx - 0.68
    dot_dy = ny - 0.32
    if (dot_dx*dot_dx + dot_dy*dot_dy) <= (0.11 * 0.11):
        # Amber #D97706
        r, g, b = 217, 119, 6
        if abs(dot_dx) < 0.028 or abs(dot_dy) < 0.028:
            r, g, b = 255, 255, 255
        return (r, g, b, 255)

    return (bg_r, bg_g, bg_b, bg_a)

def make_ico(png_list):
    # ICONDIR: 6 bytes
    # idReserved=0, idType=1, idCount=len(png_list)
    icondir = struct.pack('<HHH', 0, 1, len(png_list))
    
    entries = []
    data_bytes = bytearray()
    offset = 6 + len(png_list) * 16
    
    for (w, h, png_data) in png_list:
        width_byte = 0 if w >= 256 else w
        height_byte = 0 if h >= 256 else h
        entry = struct.pack('<BBBBHHII',
                            width_byte,
                            height_byte,
                            0, # colorCount
                            0, # reserved
                            1, # planes
                            32, # bpp
                            len(png_data),
                            offset)
        entries.append(entry)
        data_bytes.extend(png_data)
        offset += len(png_data)
    
    return icondir + b''.join(entries) + bytes(data_bytes)

def main():
    os.makedirs('public', exist_ok=True)
    
    sizes = [
        ('public/favicon-16x16.png', 16, 16),
        ('public/favicon-32x32.png', 32, 32),
        ('public/apple-touch-icon.png', 180, 180),
        ('public/android-chrome-192x192.png', 192, 192),
        ('public/android-chrome-512x512.png', 512, 512),
    ]
    
    png_for_ico = []
    
    for path, w, h in sizes:
        png_data = make_png(w, h, draw_icon_pixel)
        with open(path, 'wb') as f:
            f.write(png_data)
        print(f"Generated {path} ({w}x{h}, {len(png_data)} bytes)")
        
        if w in (16, 32):
            png_for_ico.append((w, h, png_data))
    
    # 48x48 for ICO
    png_48 = make_png(48, 48, draw_icon_pixel)
    png_for_ico.append((48, 48, png_48))
    
    ico_data = make_ico(png_for_ico)
    with open('public/favicon.ico', 'wb') as f:
        f.write(ico_data)
    print(f"Generated public/favicon.ico ({len(ico_data)} bytes with 16, 32, 48px icons)")

if __name__ == '__main__':
    main()
