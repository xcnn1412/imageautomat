"""
Core image processing module for ImageAutomat.
"""

import os
from pathlib import Path
from typing import List, Dict, Any, Optional, Tuple
from PIL import Image, ImageFilter, ImageEnhance


class ImageProcessor:
    """Main class for processing images with various operations."""
    
    SUPPORTED_FORMATS = {'.jpg', '.jpeg', '.png', '.bmp', '.gif', '.tiff', '.webp'}
    
    def __init__(self, output_dir: str = "output"):
        """
        Initialize the ImageProcessor.
        
        Args:
            output_dir: Directory where processed images will be saved
        """
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
    
    def process_image(self, image_path: str, operations: List[Dict[str, Any]]) -> Optional[str]:
        """
        Process a single image with a list of operations.
        
        Args:
            image_path: Path to the input image
            operations: List of operations to apply
            
        Returns:
            Path to the processed image or None if failed
        """
        try:
            img = Image.open(image_path)
            output_format = None
            
            for operation in operations:
                op_type = operation.get('type')
                
                if op_type == 'resize':
                    img = self._resize(img, operation)
                elif op_type == 'rotate':
                    img = self._rotate(img, operation)
                elif op_type == 'grayscale':
                    img = self._grayscale(img)
                elif op_type == 'blur':
                    img = self._blur(img, operation)
                elif op_type == 'brightness':
                    img = self._brightness(img, operation)
                elif op_type == 'contrast':
                    img = self._contrast(img, operation)
                elif op_type == 'sharpen':
                    img = self._sharpen(img)
                elif op_type == 'format':
                    output_format = operation.get('format')
                else:
                    print(f"Warning: Unknown operation type '{op_type}'")
            
            # Generate output filename
            input_path = Path(image_path)
            if output_format is None:
                output_format = input_path.suffix[1:]
            output_format = output_format.lower()
            output_filename = f"{input_path.stem}_processed.{output_format}"
            output_path = self.output_dir / output_filename
            
            # Save the processed image
            img.save(output_path, quality=95)
            return str(output_path)
            
        except Exception as e:
            print(f"Error processing {image_path}: {str(e)}")
            return None
    
    def _resize(self, img: Image.Image, operation: Dict[str, Any]) -> Image.Image:
        """Resize the image."""
        width = operation.get('width')
        height = operation.get('height')
        
        if width and height:
            return img.resize((width, height), Image.Resampling.LANCZOS)
        elif width:
            # Maintain aspect ratio
            aspect_ratio = img.height / img.width
            new_height = int(width * aspect_ratio)
            return img.resize((width, new_height), Image.Resampling.LANCZOS)
        elif height:
            # Maintain aspect ratio
            aspect_ratio = img.width / img.height
            new_width = int(height * aspect_ratio)
            return img.resize((new_width, height), Image.Resampling.LANCZOS)
        
        return img
    
    def _rotate(self, img: Image.Image, operation: Dict[str, Any]) -> Image.Image:
        """Rotate the image."""
        angle = operation.get('angle', 0)
        expand = operation.get('expand', True)
        return img.rotate(angle, expand=expand)
    
    def _grayscale(self, img: Image.Image) -> Image.Image:
        """Convert image to grayscale."""
        return img.convert('L').convert('RGB')
    
    def _blur(self, img: Image.Image, operation: Dict[str, Any]) -> Image.Image:
        """Apply blur filter to the image."""
        radius = operation.get('radius', 2)
        return img.filter(ImageFilter.GaussianBlur(radius))
    
    def _brightness(self, img: Image.Image, operation: Dict[str, Any]) -> Image.Image:
        """Adjust image brightness."""
        factor = operation.get('factor', 1.0)
        enhancer = ImageEnhance.Brightness(img)
        return enhancer.enhance(factor)
    
    def _contrast(self, img: Image.Image, operation: Dict[str, Any]) -> Image.Image:
        """Adjust image contrast."""
        factor = operation.get('factor', 1.0)
        enhancer = ImageEnhance.Contrast(img)
        return enhancer.enhance(factor)
    
    def _sharpen(self, img: Image.Image) -> Image.Image:
        """Apply sharpen filter to the image."""
        return img.filter(ImageFilter.SHARPEN)
    
    def process_batch(self, image_paths: List[str], operations: List[Dict[str, Any]]) -> List[str]:
        """
        Process multiple images with the same operations.
        
        Args:
            image_paths: List of paths to input images
            operations: List of operations to apply to all images
            
        Returns:
            List of paths to processed images
        """
        results = []
        
        for image_path in image_paths:
            result = self.process_image(image_path, operations)
            if result:
                results.append(result)
                print(f"Processed: {image_path} -> {result}")
        
        return results
    
    def process_directory(self, directory: str, operations: List[Dict[str, Any]], 
                         recursive: bool = False) -> List[str]:
        """
        Process all images in a directory.
        
        Args:
            directory: Path to the directory containing images
            operations: List of operations to apply
            recursive: Whether to search subdirectories
            
        Returns:
            List of paths to processed images
        """
        image_paths = []
        dir_path = Path(directory)
        
        if recursive:
            for ext in self.SUPPORTED_FORMATS:
                image_paths.extend(dir_path.rglob(f"*{ext}"))
        else:
            for ext in self.SUPPORTED_FORMATS:
                image_paths.extend(dir_path.glob(f"*{ext}"))
        
        return self.process_batch([str(p) for p in image_paths], operations)
