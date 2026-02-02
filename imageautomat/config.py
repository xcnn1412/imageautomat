"""
Configuration management for ImageAutomat.
"""

import yaml
from pathlib import Path
from typing import Dict, Any, List


class Config:
    """Handle configuration loading and validation."""
    
    def __init__(self, config_path: str = None):
        """
        Initialize configuration.
        
        Args:
            config_path: Path to YAML configuration file
        """
        self.config = {}
        if config_path:
            self.load(config_path)
    
    def load(self, config_path: str) -> Dict[str, Any]:
        """
        Load configuration from a YAML file.
        
        Args:
            config_path: Path to the configuration file
            
        Returns:
            Configuration dictionary
        """
        with open(config_path, 'r') as f:
            self.config = yaml.safe_load(f)
        
        return self.config
    
    def get_operations(self) -> List[Dict[str, Any]]:
        """Get list of operations from configuration."""
        return self.config.get('operations', [])
    
    def get_input_directory(self) -> str:
        """Get input directory from configuration."""
        return self.config.get('input_directory', '.')
    
    def get_output_directory(self) -> str:
        """Get output directory from configuration."""
        return self.config.get('output_directory', 'output')
    
    def get_recursive(self) -> bool:
        """Get recursive flag from configuration."""
        return self.config.get('recursive', False)
    
    @staticmethod
    def create_sample_config(output_path: str = "config.yaml"):
        """
        Create a sample configuration file.
        
        Args:
            output_path: Path where to save the sample config
        """
        sample_config = {
            'input_directory': './input',
            'output_directory': './output',
            'recursive': False,
            'operations': [
                {
                    'type': 'resize',
                    'width': 800,
                    'height': 600
                },
                {
                    'type': 'sharpen'
                },
                {
                    'type': 'brightness',
                    'factor': 1.2
                }
            ]
        }
        
        with open(output_path, 'w') as f:
            yaml.dump(sample_config, f, default_flow_style=False, sort_keys=False)
        
        print(f"Sample configuration created: {output_path}")
