# ImageAutomat 🖼️

**ImageAutomat** is a powerful, easy-to-use Python tool for automated batch image processing. Process single images or entire directories with operations like resizing, rotation, format conversion, and various filters.

## Features

- 🎨 **Multiple Operations**: Resize, rotate, convert formats, apply filters
- 📁 **Batch Processing**: Process entire directories with one command
- ⚙️ **Configuration Files**: Define complex workflows in YAML
- 🔄 **Recursive Processing**: Scan subdirectories automatically
- 🎯 **CLI Interface**: Simple command-line interface for quick tasks
- 🔌 **Python API**: Use as a library in your own projects

## Supported Operations

- **Resize**: Change image dimensions (maintaining aspect ratio optional)
- **Rotate**: Rotate images by any angle
- **Grayscale**: Convert to black and white
- **Blur**: Apply Gaussian blur
- **Brightness**: Adjust image brightness
- **Contrast**: Adjust image contrast
- **Sharpen**: Enhance image sharpness
- **Format Conversion**: Convert between JPG, PNG, BMP, GIF, TIFF, WebP

## Installation

### From Source

```bash
git clone https://github.com/xcnn1412/imageautomat.git
cd imageautomat
pip install -r requirements.txt
pip install -e .
```

### Requirements

- Python 3.7+
- Pillow (PIL)
- PyYAML
- Click

## Quick Start

### Process a Single Image

Resize an image to 800x600:

```bash
imageautomat process image.jpg --width 800 --height 600
```

Convert to grayscale and apply sharpening:

```bash
imageautomat process image.jpg --grayscale --sharpen
```

### Process Multiple Images

Process all images in a directory:

```bash
imageautomat process ./images/ --width 1920 --sharpen --output ./processed/
```

Process with recursive subdirectory scanning:

```bash
imageautomat process ./images/ --recursive --grayscale
```

### Using Configuration Files

Create a sample configuration:

```bash
imageautomat init
```

This creates a `config.yaml` file:

```yaml
input_directory: ./input
output_directory: ./output
recursive: false
operations:
  - type: resize
    width: 800
    height: 600
  - type: sharpen
  - type: brightness
    factor: 1.2
```

Run batch processing with the config:

```bash
imageautomat batch config.yaml
```

## CLI Usage

### Commands

#### `process` - Process images

```bash
imageautomat process [OPTIONS] INPUT_PATH
```

**Options:**
- `--output, -o TEXT`: Output directory (default: output)
- `--width, -w INTEGER`: Resize width
- `--height, -h INTEGER`: Resize height
- `--rotate, -r INTEGER`: Rotation angle in degrees
- `--grayscale, -g`: Convert to grayscale
- `--blur, -b FLOAT`: Apply blur (radius)
- `--brightness FLOAT`: Adjust brightness (factor, 1.0 = original)
- `--contrast FLOAT`: Adjust contrast (factor, 1.0 = original)
- `--sharpen, -s`: Apply sharpening
- `--format, -f TEXT`: Output format (jpg, png, etc.)
- `--recursive`: Process subdirectories

**Examples:**

```bash
# Resize and rotate
imageautomat process photo.jpg -w 1024 -r 90

# Multiple operations
imageautomat process photo.jpg --grayscale --sharpen --brightness 1.3

# Process directory
imageautomat process ./photos/ -w 800 --recursive -o ./resized/
```

#### `batch` - Process using configuration file

```bash
imageautomat batch CONFIG_FILE
```

**Example:**

```bash
imageautomat batch my_config.yaml
```

#### `init` - Create sample configuration

```bash
imageautomat init [--output FILE]
```

**Example:**

```bash
imageautomat init --output my_config.yaml
```

## Python API

Use ImageAutomat as a Python library:

```python
from imageautomat import ImageProcessor

# Initialize processor
processor = ImageProcessor(output_dir="output")

# Define operations
operations = [
    {'type': 'resize', 'width': 800, 'height': 600},
    {'type': 'sharpen'},
    {'type': 'brightness', 'factor': 1.2}
]

# Process single image
processor.process_image('photo.jpg', operations)

# Process multiple images
image_list = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']
processor.process_batch(image_list, operations)

# Process directory
processor.process_directory('./images', operations, recursive=True)
```

## Configuration File Format

Configuration files use YAML format:

```yaml
# Input/Output settings
input_directory: ./input
output_directory: ./output
recursive: false  # Scan subdirectories

# Operations to apply (in order)
operations:
  # Resize (maintain aspect ratio if only width or height specified)
  - type: resize
    width: 1920
    height: 1080
  
  # Rotate by angle
  - type: rotate
    angle: 90
    expand: true  # Expand canvas to fit rotated image
  
  # Convert to grayscale
  - type: grayscale
  
  # Apply blur
  - type: blur
    radius: 2
  
  # Adjust brightness (1.0 = original, >1.0 = brighter, <1.0 = darker)
  - type: brightness
    factor: 1.2
  
  # Adjust contrast (1.0 = original, >1.0 = more contrast)
  - type: contrast
    factor: 1.5
  
  # Sharpen image
  - type: sharpen
```

## Supported Image Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)
- BMP (.bmp)
- GIF (.gif)
- TIFF (.tiff)
- WebP (.webp)

## Examples

### Example 1: Create Thumbnails

```bash
imageautomat process ./photos/ --width 200 --height 200 -o ./thumbnails/
```

### Example 2: Batch Convert Format

```bash
imageautomat process ./images/ --format png -o ./converted/
```

### Example 3: Enhance Photos

```yaml
# enhance.yaml
input_directory: ./raw_photos
output_directory: ./enhanced_photos
operations:
  - type: resize
    width: 1920
  - type: sharpen
  - type: brightness
    factor: 1.1
  - type: contrast
    factor: 1.2
```

```bash
imageautomat batch enhance.yaml
```

### Example 4: Create Black & White Portfolio

```bash
imageautomat process ./color_photos/ --grayscale --contrast 1.3 --sharpen -o ./bw_portfolio/
```

## Development

### Running Tests

```bash
python -m pytest tests/
```

### Project Structure

```
imageautomat/
├── imageautomat/
│   ├── __init__.py      # Package initialization
│   ├── processor.py     # Core image processing logic
│   ├── config.py        # Configuration management
│   └── cli.py           # Command-line interface
├── tests/               # Test suite
├── examples/            # Example configurations
├── README.md
├── requirements.txt
└── setup.py
```

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.
