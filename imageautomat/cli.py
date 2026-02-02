"""
Command-line interface for ImageAutomat.
"""

import click
import sys
from pathlib import Path
from .processor import ImageProcessor
from .config import Config


@click.group()
@click.version_option(version='1.0.0')
def main():
    """ImageAutomat - Automated Image Processing Tool"""
    pass


@main.command()
@click.argument('input_path', type=click.Path(exists=True))
@click.option('--output', '-o', default='output', help='Output directory')
@click.option('--width', '-w', type=int, help='Resize width')
@click.option('--height', '-h', type=int, help='Resize height')
@click.option('--rotate', '-r', type=int, help='Rotation angle in degrees')
@click.option('--grayscale', '-g', is_flag=True, help='Convert to grayscale')
@click.option('--blur', '-b', type=float, help='Apply blur (radius)')
@click.option('--brightness', type=float, help='Adjust brightness (factor)')
@click.option('--contrast', type=float, help='Adjust contrast (factor)')
@click.option('--sharpen', '-s', is_flag=True, help='Apply sharpening')
@click.option('--format', '-f', help='Output format (jpg, png, etc.)')
@click.option('--recursive', is_flag=True, help='Process subdirectories')
def process(input_path, output, width, height, rotate, grayscale, blur, 
            brightness, contrast, sharpen, format, recursive):
    """Process images with specified operations."""
    
    # Build operations list from CLI options
    operations = []
    
    if width or height:
        op = {'type': 'resize'}
        if width:
            op['width'] = width
        if height:
            op['height'] = height
        operations.append(op)
    
    if rotate:
        operations.append({'type': 'rotate', 'angle': rotate})
    
    if grayscale:
        operations.append({'type': 'grayscale'})
    
    if blur:
        operations.append({'type': 'blur', 'radius': blur})
    
    if brightness:
        operations.append({'type': 'brightness', 'factor': brightness})
    
    if contrast:
        operations.append({'type': 'contrast', 'factor': contrast})
    
    if sharpen:
        operations.append({'type': 'sharpen'})
    
    if format:
        operations.append({'type': 'format', 'format': format})
    
    if not operations:
        click.echo("Error: No operations specified. Use --help for available options.")
        sys.exit(1)
    
    # Initialize processor
    processor = ImageProcessor(output_dir=output)
    
    # Process based on input type
    input_path_obj = Path(input_path)
    
    if input_path_obj.is_file():
        result = processor.process_image(str(input_path_obj), operations)
        if result:
            click.echo(f"✓ Processed: {input_path} -> {result}")
        else:
            click.echo(f"✗ Failed to process: {input_path}")
            sys.exit(1)
    
    elif input_path_obj.is_dir():
        results = processor.process_directory(str(input_path_obj), operations, recursive)
        click.echo(f"✓ Processed {len(results)} images")
    
    else:
        click.echo(f"Error: Invalid input path: {input_path}")
        sys.exit(1)


@main.command()
@click.argument('config_file', type=click.Path(exists=True))
def batch(config_file):
    """Process images using a configuration file."""
    
    try:
        config = Config(config_file)
        
        input_dir = config.get_input_directory()
        output_dir = config.get_output_directory()
        operations = config.get_operations()
        recursive = config.get_recursive()
        
        if not operations:
            click.echo("Error: No operations defined in configuration file.")
            sys.exit(1)
        
        processor = ImageProcessor(output_dir=output_dir)
        results = processor.process_directory(input_dir, operations, recursive)
        
        click.echo(f"✓ Batch processing complete: {len(results)} images processed")
        
    except Exception as e:
        click.echo(f"Error: {str(e)}")
        sys.exit(1)


@main.command()
@click.option('--output', '-o', default='config.yaml', help='Output file path')
def init(output):
    """Create a sample configuration file."""
    
    try:
        Config.create_sample_config(output)
        click.echo(f"✓ Sample configuration created: {output}")
    except Exception as e:
        click.echo(f"Error: {str(e)}")
        sys.exit(1)


if __name__ == '__main__':
    main()
