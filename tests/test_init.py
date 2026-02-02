"""
Test package initialization.
"""

def test_imports():
    """Test that package imports work correctly."""
    from imageautomat import ImageProcessor
    from imageautomat import __version__
    
    assert ImageProcessor is not None
    assert __version__ == "1.0.0"
