"""
Unit tests for ImageAutomat.
"""

import unittest
import os
import tempfile
import shutil
from pathlib import Path
from PIL import Image
from imageautomat.processor import ImageProcessor


class TestImageProcessor(unittest.TestCase):
    """Test cases for the ImageProcessor class."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.temp_dir = tempfile.mkdtemp()
        self.output_dir = os.path.join(self.temp_dir, "output")
        self.processor = ImageProcessor(output_dir=self.output_dir)
        
        # Create a test image
        self.test_image_path = os.path.join(self.temp_dir, "test_image.jpg")
        img = Image.new('RGB', (800, 600), color='red')
        img.save(self.test_image_path)
    
    def tearDown(self):
        """Clean up test fixtures."""
        shutil.rmtree(self.temp_dir)
    
    def test_resize_both_dimensions(self):
        """Test resizing with both width and height specified."""
        operations = [{'type': 'resize', 'width': 400, 'height': 300}]
        result = self.processor.process_image(self.test_image_path, operations)
        
        self.assertIsNotNone(result)
        self.assertTrue(os.path.exists(result))
        
        # Verify dimensions
        with Image.open(result) as img:
            self.assertEqual(img.size, (400, 300))
    
    def test_resize_width_only(self):
        """Test resizing with only width specified (aspect ratio maintained)."""
        operations = [{'type': 'resize', 'width': 400}]
        result = self.processor.process_image(self.test_image_path, operations)
        
        self.assertIsNotNone(result)
        
        # Verify width and aspect ratio
        with Image.open(result) as img:
            self.assertEqual(img.width, 400)
            self.assertEqual(img.height, 300)  # 800:600 = 400:300
    
    def test_rotate(self):
        """Test image rotation."""
        operations = [{'type': 'rotate', 'angle': 90}]
        result = self.processor.process_image(self.test_image_path, operations)
        
        self.assertIsNotNone(result)
        self.assertTrue(os.path.exists(result))
    
    def test_grayscale(self):
        """Test grayscale conversion."""
        operations = [{'type': 'grayscale'}]
        result = self.processor.process_image(self.test_image_path, operations)
        
        self.assertIsNotNone(result)
        self.assertTrue(os.path.exists(result))
    
    def test_blur(self):
        """Test blur operation."""
        operations = [{'type': 'blur', 'radius': 5}]
        result = self.processor.process_image(self.test_image_path, operations)
        
        self.assertIsNotNone(result)
        self.assertTrue(os.path.exists(result))
    
    def test_brightness(self):
        """Test brightness adjustment."""
        operations = [{'type': 'brightness', 'factor': 1.5}]
        result = self.processor.process_image(self.test_image_path, operations)
        
        self.assertIsNotNone(result)
        self.assertTrue(os.path.exists(result))
    
    def test_contrast(self):
        """Test contrast adjustment."""
        operations = [{'type': 'contrast', 'factor': 1.5}]
        result = self.processor.process_image(self.test_image_path, operations)
        
        self.assertIsNotNone(result)
        self.assertTrue(os.path.exists(result))
    
    def test_sharpen(self):
        """Test sharpen operation."""
        operations = [{'type': 'sharpen'}]
        result = self.processor.process_image(self.test_image_path, operations)
        
        self.assertIsNotNone(result)
        self.assertTrue(os.path.exists(result))
    
    def test_multiple_operations(self):
        """Test chaining multiple operations."""
        operations = [
            {'type': 'resize', 'width': 400, 'height': 300},
            {'type': 'grayscale'},
            {'type': 'sharpen'}
        ]
        result = self.processor.process_image(self.test_image_path, operations)
        
        self.assertIsNotNone(result)
        self.assertTrue(os.path.exists(result))
        
        # Verify dimensions after operations
        with Image.open(result) as img:
            self.assertEqual(img.size, (400, 300))
    
    def test_batch_processing(self):
        """Test batch processing of multiple images."""
        # Create multiple test images
        image_paths = []
        for i in range(3):
            path = os.path.join(self.temp_dir, f"test_image_{i}.jpg")
            img = Image.new('RGB', (800, 600), color='blue')
            img.save(path)
            image_paths.append(path)
        
        operations = [{'type': 'resize', 'width': 400, 'height': 300}]
        results = self.processor.process_batch(image_paths, operations)
        
        self.assertEqual(len(results), 3)
        for result in results:
            self.assertTrue(os.path.exists(result))
    
    def test_process_directory(self):
        """Test processing all images in a directory."""
        # Create multiple test images in a directory
        input_dir = os.path.join(self.temp_dir, "input")
        os.makedirs(input_dir)
        
        for i in range(3):
            path = os.path.join(input_dir, f"test_{i}.jpg")
            img = Image.new('RGB', (800, 600), color='green')
            img.save(path)
        
        operations = [{'type': 'resize', 'width': 200}]
        results = self.processor.process_directory(input_dir, operations)
        
        self.assertEqual(len(results), 3)
        for result in results:
            self.assertTrue(os.path.exists(result))


if __name__ == '__main__':
    unittest.main()
