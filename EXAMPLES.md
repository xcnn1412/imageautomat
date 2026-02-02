# ImageAutomat Usage Examples

This document provides practical examples of using ImageAutomat.

## Example 1: Resize Images for Web

Create optimized images for web usage:

```bash
imageautomat process ./photos/ --width 1920 --sharpen -o ./web_optimized/ --recursive
```

## Example 2: Create Thumbnails

Generate thumbnails from a directory:

```bash
imageautomat process ./images/ -w 200 -h 200 -o ./thumbs/
```

## Example 3: Convert Format

Convert all JPG images to PNG:

```bash
imageautomat process ./images/ --format png -o ./converted/
```

## Example 4: Black & White Portfolio

Convert to grayscale and enhance:

```bash
imageautomat process ./portfolio/ --grayscale --contrast 1.3 --sharpen -o ./bw_portfolio/
```

## Example 5: Batch Processing with Config

Create a config file (enhance.yaml):

```yaml
input_directory: ./raw_photos
output_directory: ./enhanced
recursive: true
operations:
  - type: resize
    width: 1920
  - type: sharpen
  - type: brightness
    factor: 1.1
  - type: contrast
    factor: 1.2
```

Run batch processing:

```bash
imageautomat batch enhance.yaml
```

## Example 6: Photo Rotation

Rotate images 90 degrees:

```bash
imageautomat process ./photos/ --rotate 90 -o ./rotated/
```

## Example 7: Apply Artistic Effect

Create a soft, dreamy effect:

```bash
imageautomat process photo.jpg --blur 3 --brightness 1.2 -o ./artistic/
```

## Python API Usage

```python
from imageautomat import ImageProcessor

# Initialize
processor = ImageProcessor(output_dir="output")

# Define workflow
operations = [
    {'type': 'resize', 'width': 800},
    {'type': 'grayscale'},
    {'type': 'sharpen'},
    {'type': 'contrast', 'factor': 1.2}
]

# Process directory
processor.process_directory('./photos', operations, recursive=True)
```

## Common Patterns

### Web Gallery
```yaml
operations:
  - type: resize
    width: 1200
  - type: sharpen
  - type: format
    format: jpg
```

### Instagram Ready
```yaml
operations:
  - type: resize
    width: 1080
    height: 1080
  - type: sharpen
  - type: brightness
    factor: 1.05
```

### Print Preparation
```yaml
operations:
  - type: resize
    width: 3000
  - type: sharpen
  - type: contrast
    factor: 1.1
```
