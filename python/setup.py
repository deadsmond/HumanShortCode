from setuptools import setup, find_packages

setup(
    name="HumanShortCode",
    version="1.0.0",
    description="Replace long, unreadable ids with short human-readable code ids",
    author="Adam Lewicki",
    packages=find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
    ],
    python_requires=">=3.6",
)
