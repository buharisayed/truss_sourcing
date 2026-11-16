# TRUSS

Single-page website for an independent international sourcing and procurement agent, based on the supplied design reference.

## Preview

Open `dist/index.html` in a browser, or serve `dist` with any static HTTP server.

```sh
python3 -m http.server 8080 --bind 127.0.0.1 --directory dist
```

Visit `http://127.0.0.1:8080`.

## Deploy

Publish the contents of `dist/` to a static host. The project has no build step, server code, dependency installation or environment configuration.

The page and direct WhatsApp messages are in `dist/index.html`. The optional sourcing brief builds a WhatsApp message in the visitor’s browser through `dist/site.js`. The site itself does not collect or store form entries. The visitor reviews the draft in WhatsApp and sends it from there.

## Assets

DM Sans is self-hosted under the SIL Open Font License. The license and WebP images are included in `dist/assets/`. The factory and product visuals are AI-generated illustrations. They do not depict TRUSS staff, facilities or a client project.

The built-in image generator used the supplied mockup as a framing reference with these briefs.

### Steel tubes

> Generate ONLY a single wide 3:2 photoreal photograph, no webpage or text. Use the upper right hero photo of the attached TRUSS mockup as composition reference. Close-up of horizontally stacked stainless steel tubes in a manufacturer’s industrial shop. Large bright steel rims on the right half, tube openings pointed at camera, diagonally stacked with realistic subtle abrasion and machining. Left half blurred factory structures, dark teal steel walls and very subtle warm hanging fixtures. Cool silvery color with deep blue green shadows, studio-grade architectural documentary photography, crisp details, no people, logos, lettering or graphics. Designed for a right-hand webpage hero image cropped diagonally from the left, so keep the essential large pipe openings towards the right.

### Industry product photographs

> Generate ONLY a photographic contact sheet of five landscape product photographs, arranged against no margins in a precise uniform 3-column by 2-row grid, with absolutely no gutter between images. Overall 3:2 landscape aspect ratio. Each cell a self-contained photograph filling the cell, with clear abrupt boundary at each exact one third of width and one half of height. Top left: polished stainless steel hollow tubes in a factory rack, their open ends on right. Top middle: rebar reinforcement grid at a construction site, close up. Top right: refined amber amenity pump bottles and cream folded hotel towels on a beige countertop. Bottom left: cut ends of thick dark forest insulated electrical cables showing copper strands, dark background. Bottom middle: two kraft cardboard cartons with taped seams in warm light. Bottom right: brushed metal fittings. Individual compositions close up, commercially photographed, muted dark green, warm cream and silver industrial palette, no letters, marks, labels or watermarks. Follow the subject and framing in the industry thumbnail row in the provided reference. The output is photos only, no website screenshot or text.

### Factory visit

> Generate ONLY a wide 3:2 editorial documentary photo of a supplier-side manufacturing representative and a buyer reviewing an engineering drawing during a factory visit, based on the atmosphere in the horizontal factory photograph in the lower half of the provided design reference. Main figure shown from behind in white hardhat, dark green unbranded jacket, standing right of center, another hardhat figure in profile glancing down at a paper drawing they are discussing. Atmospheric teal steel industrial interior with warm overhead fixtures and subtle bokeh. Mid distance at waist level, place the heads and paper within the middle horizontal third to allow a wide shallow crop. Subjects and their interaction positioned on the right half and open factory environment on left. Natural, premium commercial photograph. No readable type, brand marks, graphics or mockup.
