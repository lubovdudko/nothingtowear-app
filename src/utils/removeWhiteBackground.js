export async function removeWhiteBackgroundAndCrop(imageURL) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = imageURL;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Remove white background
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0; // Set opacity
        }
      }

      // Update image with removed background
      ctx.putImageData(imageData, 0, 0);

      // Find boundaries of clothes at image
      let minX = canvas.width,
        minY = canvas.height,
        maxX = 0,
        maxY = 0;

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const index = (y * canvas.width + x) * 4;
          const a = data[index + 3]; // Check for opacity

          if (a > 0) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }

      // Crop image
      const croppedWidth = maxX - minX;
      const croppedHeight = maxY - minY;

      // Create canvas for new image
      const croppedCanvas = document.createElement("canvas");
      const croppedCtx = croppedCanvas.getContext("2d");

      croppedCanvas.width = croppedWidth;
      croppedCanvas.height = croppedHeight;

      // Copy updated image to new canvas
      croppedCtx.drawImage(
        canvas,
        minX,
        minY,
        croppedWidth,
        croppedHeight,
        0,
        0,
        croppedWidth,
        croppedHeight
      );

      // Return new image
      resolve(croppedCanvas.toDataURL());
    };

    image.onerror = (err) => {
      reject(err);
    };
  });
}
