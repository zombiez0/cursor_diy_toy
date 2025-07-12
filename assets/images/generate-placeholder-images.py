#!/usr/bin/env python3
"""
Placeholder Image Generator for Kids Craft Hub
Generates placeholder images for all science experiment pages
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder_image(width, height, text, filename, bg_color=(240, 240, 240), text_color=(100, 100, 100)):
    """Create a placeholder image with specified dimensions and text"""
    # Create image
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a nice font, fallback to default if not available
    try:
        font = ImageFont.truetype("arial.ttf", 24)
        small_font = ImageFont.truetype("arial.ttf", 16)
    except:
        try:
            font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)
            small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 16)
        except:
            font = ImageFont.load_default()
            small_font = ImageFont.load_default()
    
    # Calculate text position for centering
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2 - 20
    
    # Draw main text
    draw.text((x, y), text, fill=text_color, font=font)
    
    # Draw dimensions
    dim_text = f"{width}x{height}"
    dim_bbox = draw.textbbox((0, 0), dim_text, font=small_font)
    dim_width = dim_bbox[2] - dim_bbox[0]
    dim_x = (width - dim_width) // 2
    dim_y = y + text_height + 10
    
    draw.text((dim_x, dim_y), dim_text, fill=text_color, font=small_font)
    
    # Draw border
    draw.rectangle([0, 0, width-1, height-1], outline=text_color, width=2)
    
    # Save image
    img.save(filename)
    print(f"Created: {filename}")

def main():
    """Generate all placeholder images for the science experiments"""
    
    # Create images directory if it doesn't exist
    os.makedirs(".", exist_ok=True)
    
    # Hero images (large, prominent)
    hero_images = [
        ("rainbow-slime-hero.jpg", "Rainbow Slime\nColorful & Stretchy"),
        ("volcano-experiment-hero.jpg", "Volcano Experiment\nErupting Fun"),
        ("crystal-garden-hero.jpg", "Crystal Garden\nGrow Beautiful Crystals"),
        ("invisible-ink-hero.jpg", "Invisible Ink\nSecret Messages"),
    ]
    
    for filename, text in hero_images:
        create_placeholder_image(800, 600, text, filename, (220, 240, 255))
    
    # Material images (medium, square)
    material_images = [
        # Rainbow Slime materials
        ("white-glue.jpg", "White\nSchool Glue"),
        ("shaving-cream.jpg", "Shaving\nCream"),
        ("contact-solution.jpg", "Contact\nSolution"),
        ("food-coloring.jpg", "Food\nColoring"),
        ("mixing-bowls.jpg", "Mixing\nBowls"),
        ("wooden-spoons.jpg", "Wooden\nSpoons"),
        
        # Volcano materials
        ("baking-soda.jpg", "Baking\nSoda"),
        ("white-vinegar.jpg", "White\nVinegar"),
        ("red-food-coloring.jpg", "Red Food\nColoring"),
        ("dish-soap.jpg", "Dish\nSoap"),
        ("modeling-clay.jpg", "Modeling\nClay"),
        ("plastic-bottle.jpg", "Plastic\nBottle"),
        ("funnel.jpg", "Funnel"),
        ("newspaper.jpg", "Newspaper"),
        
        # Crystal Garden materials
        ("table-salt.jpg", "Table\nSalt"),
        ("hot-water.jpg", "Hot\nWater"),
        ("food-coloring-bottles.jpg", "Food\nColoring"),
        ("cotton-string.jpg", "Cotton\nString"),
        ("wooden-sticks.jpg", "Wooden\nSticks"),
        ("glass-jars.jpg", "Glass\nJars"),
        ("magnifying-glass.jpg", "Magnifying\nGlass"),
        ("measuring-cups.jpg", "Measuring\nCups"),
        
        # Invisible Ink materials
        ("fresh-lemon.jpg", "Fresh\nLemon"),
        ("cotton-swabs.jpg", "Cotton\nSwabs"),
        ("white-paper.jpg", "White\nPaper"),
        ("small-bowl.jpg", "Small\nBowl"),
        ("paintbrush.jpg", "Paint\nBrush"),
        ("iron.jpg", "Iron"),
        ("hair-dryer.jpg", "Hair\nDryer"),
        ("light-bulb.jpg", "Light\nBulb"),
    ]
    
    for filename, text in material_images:
        create_placeholder_image(300, 300, text, filename, (255, 250, 240))
    
    # Step-by-step images (rectangular, instructional)
    step_images = [
        # Rainbow Slime steps
        ("rainbow-slime-step1.jpg", "Step 1\nPrepare Workspace"),
        ("rainbow-slime-step2.jpg", "Step 2\nDivide Glue"),
        ("rainbow-slime-step3.jpg", "Step 3\nAdd Colors"),
        ("rainbow-slime-step4.jpg", "Step 4\nMix Colors"),
        ("rainbow-slime-step5.jpg", "Step 5\nAdd Shaving Cream"),
        ("rainbow-slime-step6.jpg", "Step 6\nMix Cream"),
        ("rainbow-slime-step7.jpg", "Step 7\nAdd Contact Solution"),
        ("rainbow-slime-step8.jpg", "Step 8\nSlime Forms"),
        ("rainbow-slime-step9.jpg", "Step 9\nKnead Colors"),
        ("rainbow-slime-step10.jpg", "Step 10\nCreate Layers"),
        ("rainbow-slime-step11.jpg", "Step 11\nFold & Twist"),
        ("rainbow-slime-step12.jpg", "Step 12\nPlay & Store"),
        
        # Volcano steps
        ("volcano-step1.jpg", "Step 1\nPrepare Workspace"),
        ("volcano-step2.jpg", "Step 2\nPrepare Bottle"),
        ("volcano-step3.jpg", "Step 3\nBuild Base"),
        ("volcano-step4.jpg", "Step 4\nShape Volcano"),
        ("volcano-step5.jpg", "Step 5\nAdd Baking Soda"),
        ("volcano-step6.jpg", "Step 6\nPrepare Mixture"),
        ("volcano-step7.jpg", "Step 7\nMix Liquid"),
        ("volcano-step8.jpg", "Step 8\nGet Ready"),
        ("volcano-step9.jpg", "Step 9\nEruption!"),
        ("volcano-step10.jpg", "Step 10\nObserve Flow"),
        ("volcano-step11.jpg", "Step 11\nTry Variations"),
        ("volcano-step12.jpg", "Step 12\nClean & Discuss"),
        
        # Crystal Garden steps
        ("crystal-step1.jpg", "Step 1\nPrepare Materials"),
        ("crystal-step2.jpg", "Step 2\nHeat Water"),
        ("crystal-step3.jpg", "Step 3\nAdd Salt"),
        ("crystal-step4.jpg", "Step 4\nAdd Coloring"),
        ("crystal-step5.jpg", "Step 5\nPrepare String"),
        ("crystal-step6.jpg", "Step 6\nSet Up Jar"),
        ("crystal-step7.jpg", "Step 7\nFind Spot"),
        ("crystal-step8.jpg", "Step 8\nDay 1-2"),
        ("crystal-step9.jpg", "Step 9\nDay 3-4"),
        ("crystal-step10.jpg", "Step 10\nDay 5-7"),
        ("crystal-step11.jpg", "Step 11\nHarvest"),
        ("crystal-step12.jpg", "Step 12\nDisplay"),
        
        # Invisible Ink steps
        ("invisible-ink-step1.jpg", "Step 1\nPrepare Workspace"),
        ("invisible-ink-step2.jpg", "Step 2\nExtract Juice"),
        ("invisible-ink-step3.jpg", "Step 3\nStrain Juice"),
        ("invisible-ink-step4.jpg", "Step 4\nPrepare Tools"),
        ("invisible-ink-step5.jpg", "Step 5\nWrite Message"),
        ("invisible-ink-step6.jpg", "Step 6\nLet Dry"),
        ("invisible-ink-step7.jpg", "Step 7\nPrepare Heat"),
        ("invisible-ink-step8.jpg", "Step 8\nReveal Message"),
        ("invisible-ink-step9.jpg", "Step 9\nTry Alternatives"),
        ("invisible-ink-step10.jpg", "Step 10\nMultiple Messages"),
        ("invisible-ink-step11.jpg", "Step 11\nTest Papers"),
        ("invisible-ink-step12.jpg", "Step 12\nShare Messages"),
    ]
    
    for filename, text in step_images:
        create_placeholder_image(600, 400, text, filename, (240, 255, 240))
    
    # Variation and example images
    variation_images = [
        ("glitter-volcano.jpg", "Glitter\nVolcano"),
        ("multi-volcano.jpg", "Multiple\nVolcanoes"),
        ("underwater-volcano.jpg", "Underwater\nVolcano"),
        ("frozen-volcano.jpg", "Ice\nVolcano"),
        ("salt-crystals.jpg", "Salt\nCrystals"),
        ("epsom-crystals.jpg", "Epsom\nCrystals"),
        ("sugar-crystals.jpg", "Sugar\nCrystals"),
        ("alum-crystals.jpg", "Alum\nCrystals"),
        ("lemon-juice-ink.jpg", "Lemon\nJuice Ink"),
        ("milk-ink.jpg", "Milk\nInk"),
        ("baking-soda-ink.jpg", "Baking Soda\nInk"),
        ("white-crayon-ink.jpg", "White Crayon\nInk"),
        ("treasure-map.jpg", "Treasure\nMap"),
        ("secret-code.jpg", "Secret\nCode"),
        ("spy-game.jpg", "Spy\nGame"),
        ("invisible-art.jpg", "Invisible\nArt"),
    ]
    
    for filename, text in variation_images:
        create_placeholder_image(400, 300, text, filename, (255, 240, 255))
    
    print(f"\nGenerated {len(hero_images) + len(material_images) + len(step_images) + len(variation_images)} placeholder images!")
    print("All images are ready for the science experiment pages.")

if __name__ == "__main__":
    main()