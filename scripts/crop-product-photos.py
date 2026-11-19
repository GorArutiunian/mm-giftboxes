#!/usr/bin/env python3
"""Crop Instagram collage screenshots into clean product photos."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path("/agent/mm-giftboxes/public/products")
STORE = Path("/cursor/stores/self/media/products")
GRID = Path("/cursor/stores/self/media/instagram-source/grid-8.png")
COLLAGE = Path("/cursor/stores/self/media/instagram-source/collage-3.png")

ROOT.mkdir(parents=True, exist_ok=True)
STORE.mkdir(parents=True, exist_ok=True)


def cover_rect(img: Image.Image, box: tuple[int, int, int, int], sample: tuple[int, int]) -> None:
    """Fill a rectangle with a sampled nearby color (remove UI chrome)."""
    x0, y0, x1, y1 = box
    sx, sy = sample
    sx = max(0, min(img.width - 1, sx))
    sy = max(0, min(img.height - 1, sy))
    color = img.getpixel((sx, sy))
    draw = ImageDraw.Draw(img)
    draw.rectangle([x0, y0, x1, y1], fill=color)


def save_jpeg(img: Image.Image, name: str, quality: int = 90) -> Path:
    rgb = img.convert("RGB")
    out = ROOT / name
    rgb.save(out, "JPEG", quality=quality, optimize=True)
    store_out = STORE / name
    rgb.save(store_out, "JPEG", quality=quality, optimize=True)
    print(f"wrote {out} ({rgb.size[0]}x{rgb.size[1]})")
    return out


def crop_grid() -> dict[str, Image.Image]:
    img = Image.open(GRID).convert("RGBA")
    w, h = img.size  # 2474 x 1654
    cols, rows = 4, 2
    cw, ch = w // cols, h // rows
    cells: dict[str, Image.Image] = {}
    idx = 0
    for r in range(rows):
        for c in range(cols):
            idx += 1
            left = c * cw
            top = r * ch
            # inset slightly to avoid hairline seams between cells
            inset = 2
            cell = img.crop((left + inset, top + inset, left + cw - inset, top + ch - inset)).copy()
            # Reels icon ~ top-right corner on most panels
            cover_rect(
                cell,
                (cell.width - 70, 8, cell.width - 8, 70),
                (cell.width - 90, 40),
            )
            cells[f"grid-{idx}"] = cell
    return cells


def crop_collage() -> dict[str, Image.Image]:
    img = Image.open(COLLAGE).convert("RGBA")
    w, h = img.size  # 1876 x 832
    cols = 3
    cw = w // cols
    panels: dict[str, Image.Image] = {}
    for i in range(cols):
        left = i * cw
        inset = 2
        cell = img.crop((left + inset, 0 + inset, left + cw - inset, h - inset)).copy()
        # Reels icon top-right
        cover_rect(
            cell,
            (cell.width - 70, 8, cell.width - 8, 70),
            (cell.width - 90, 40),
        )
        panels[f"collage-{i + 1}"] = cell
    # Left panel has brown "6900 Դրամ" price overlay roughly center
    coffee = panels["collage-1"]
    # Cover price badge — approx center band
    cx, cy = coffee.width // 2, coffee.height // 2
    cover_rect(
        coffee,
        (cx - 160, cy - 55, cx + 160, cy + 55),
        (cx, cy - 80),
    )
    # Second pass with slightly different sample if badge is large
    cover_rect(
        coffee,
        (cx - 150, cy - 45, cx + 150, cy + 45),
        (cx - 180, cy),
    )
    return panels


def to_square_focus(img: Image.Image, bias_y: float = 0.45) -> Image.Image:
    """Center-ish square crop favoring product content."""
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = max(0, min(h - side, int(h * bias_y - side / 2)))
    return img.crop((left, top, left + side, top + side))


def main() -> None:
    grid = crop_grid()
    collage = crop_collage()

    # --- Coffee Break (confirmed 6900) ---
    # Prefer clean hero: collage left (after UI wipe), grid1 open box, grid8 large set, grid5 close-up
    save_jpeg(to_square_focus(collage["collage-1"], 0.48), "coffee-break-01.jpg")
    save_jpeg(to_square_focus(grid["grid-1"], 0.50), "coffee-break-02.jpg")
    save_jpeg(to_square_focus(grid["grid-8"], 0.50), "coffee-break-03.jpg")
    save_jpeg(to_square_focus(grid["grid-5"], 0.55), "coffee-break-04.jpg")

    # --- Daisy set ---
    daisy = grid["grid-2"]
    # Cover Armenian caption band at top if present (~top 12%)
    cover_rect(daisy, (0, 0, daisy.width, int(daisy.height * 0.10)), (daisy.width // 2, int(daisy.height * 0.12)))
    save_jpeg(to_square_focus(daisy, 0.52), "daisy-set-01.jpg")

    # --- Sage / cozy blanket (grid 3) ---
    save_jpeg(to_square_focus(grid["grid-3"], 0.50), "sage-blanket-01.jpg")

    # --- Floral stationery (grid 4) — cover heart overlay center ---
    floral = grid["grid-4"]
    cover_rect(
        floral,
        (floral.width // 2 - 40, floral.height // 2 - 40, floral.width // 2 + 40, floral.height // 2 + 40),
        (floral.width // 2 - 60, floral.height // 2),
    )
    save_jpeg(to_square_focus(floral, 0.50), "floral-stationery-01.jpg")

    # --- Sage stationery (grid 6) ---
    save_jpeg(to_square_focus(grid["grid-6"], 0.50), "sage-stationery-01.jpg")

    # --- Cozy home delivery box (grid 7) — cover caption band ---
    cozy = grid["grid-7"]
    cover_rect(cozy, (0, 0, cozy.width, int(cozy.height * 0.12)), (cozy.width // 2, int(cozy.height * 0.14)))
    save_jpeg(to_square_focus(cozy, 0.52), "cozy-home-01.jpg")

    # --- Forest green (collage middle) ---
    save_jpeg(to_square_focus(collage["collage-2"], 0.48), "forest-green-01.jpg")

    # --- Sage wheat (collage right) ---
    save_jpeg(to_square_focus(collage["collage-3"], 0.48), "sage-wheat-01.jpg")

    print("done")


if __name__ == "__main__":
    main()
