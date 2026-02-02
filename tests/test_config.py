"""
Test configuration management.
"""

import unittest
import tempfile
import os
from imageautomat.config import Config


class TestConfig(unittest.TestCase):
    """Test cases for the Config class."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.temp_dir = tempfile.mkdtemp()
        self.config_path = os.path.join(self.temp_dir, "test_config.yaml")
    
    def tearDown(self):
        """Clean up test fixtures."""
        import shutil
        shutil.rmtree(self.temp_dir)
    
    def test_create_sample_config(self):
        """Test creating a sample configuration file."""
        Config.create_sample_config(self.config_path)
        
        self.assertTrue(os.path.exists(self.config_path))
        
        # Load and verify
        config = Config(self.config_path)
        operations = config.get_operations()
        
        self.assertIsInstance(operations, list)
        self.assertGreater(len(operations), 0)
    
    def test_load_config(self):
        """Test loading configuration from file."""
        Config.create_sample_config(self.config_path)
        
        config = Config(self.config_path)
        
        self.assertIsNotNone(config.get_input_directory())
        self.assertIsNotNone(config.get_output_directory())
        self.assertIsInstance(config.get_recursive(), bool)
    
    def test_get_operations(self):
        """Test getting operations from config."""
        Config.create_sample_config(self.config_path)
        
        config = Config(self.config_path)
        operations = config.get_operations()
        
        self.assertIsInstance(operations, list)
        for op in operations:
            self.assertIn('type', op)


if __name__ == '__main__':
    unittest.main()
