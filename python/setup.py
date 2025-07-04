from setuptools import setup, find_packages

setup(
    name="human-short-code",
    version="1.0.2",
    description="Replace long, unreadable ids with short human-readable code ids",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/deadsmond/HumanShortCode",
    author="Adam Lewicki",
    packages=find_packages(),
    install_requires=[],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
    ],
    python_requires=">=3.6",
)
