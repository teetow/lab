import math
from svgpathtools import svg2paths, wsvg, Line, Path
import os

currentpath = os.getcwd()


def scale_svg(svg_file, grid_size):
    def get_size(svg_attrs):
        w, h = 300, 300

        if "width" in svg_attrs:
            w = svg_attrs["width"]
        elif "viewBox" in svg_attrs:
            w = svg_attrs["viewBox"].split(" ")[2]

        if "height" in svg_attrs:
            h = svg_attrs["height"]
        elif "viewBox" in svg_attrs:
            h = svg_attrs["viewBox"].split(" ")[3]
        return int(w), int(h)

    # Read the SVG file and convert it to paths
    paths, attributes, svg_attrs = svg2paths(svg_file, return_svg_attributes=True)

    # each attribute needs to have "id" appear before "d"
    attributes = sorted(attributes, key=lambda x: "id" in x)

    w, h = get_size(svg_attrs)

    cols = w // grid_size
    rows = h // grid_size

    # Scale down each path segment by the given factor
    for i, path in enumerate(paths):
        col_offset = (i % cols) * grid_size
        row_offset = (i // cols) * grid_size

        segment: Line
        for segment in path:
            segment.start -= complex(col_offset, row_offset)
            segment.end -= complex(col_offset, row_offset)

    # Save the modified paths to a new SVG file
    wsvg(
        paths,
        attributes=attributes,
        svg_attributes=svg_attrs,
        filename=os.path.join(
            currentpath, os.path.splitext(os.path.basename(svg_file))[0] + "-scaled.svg"
        ),
    )


# Usage example
fn = "font.svg"
# fullpath = "src/projects/Font64/" + fn
scale_svg(os.path.join(currentpath, fn), 8)
