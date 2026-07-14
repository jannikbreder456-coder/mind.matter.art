from pathlib import Path

from PIL import Image, ImageOps


IMAGES = [
    ("meditate.png", "meditate"),
    ("organic-passage-original.png", "organic-passage-original"),
    ("organic-passage-print.png", "organic-passage-print"),
    ("missed-opportunities-print.webp", "missed-opportunities-print"),
    (
        "missed-opportunities-original-decorative-frame-example.webp",
        "missed-opportunities-original",
    ),
    ("Projekt 1.png", "abstract-faces"),
    ("faces-v3-print.webp", "faces-v3"),
    ("event-bar-night.webp", "event-bar-night"),
    ("festival-mushroom-object.webp", "festival-object"),
    ("tattoo-flower-sunflower.webp", "tattoo-sunflower"),
    ("tattoo-flower-motif.webp", "tattoo-flower"),
    ("selflove.png", "selflove"),
    ("selflove2.png", "selflove2"),
    ("surface-design-bar.png", "surface-design-bar"),
]

VARIANTS = [
    (1800, "", 80),
    (900, "-thumb", 74),
]


def optimize_images() -> None:
    image_directory = Path(__file__).parent / "img"
    output_directory = image_directory / "optimized"
    output_directory.mkdir(exist_ok=True)

    for filename, output_name in IMAGES:
        source = image_directory / filename
        with Image.open(source) as opened:
            image = ImageOps.exif_transpose(opened)
            if image.mode not in ("RGB", "RGBA"):
                image = image.convert(
                    "RGBA" if "transparency" in image.info else "RGB"
                )

            for max_width, suffix, quality in VARIANTS:
                variant = image.copy()
                if variant.width > max_width:
                    height = round(variant.height * max_width / variant.width)
                    variant = variant.resize(
                        (max_width, height),
                        Image.Resampling.LANCZOS,
                    )

                destination = output_directory / f"{output_name}{suffix}.webp"
                variant.save(
                    destination,
                    "WEBP",
                    quality=quality,
                    method=6,
                    optimize=True,
                )
                size_kb = destination.stat().st_size / 1024
                print(f"{destination.name}: {size_kb:.0f} KB")


if __name__ == "__main__":
    optimize_images()
