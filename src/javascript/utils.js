const fetchImage = async (endpoint, targetElement) => {
    return fetch(endpoint)
        .then(response => {
            // Check if the response is OK (status 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Treat the response as a blob for image data
            return response.blob();
        })
        .then(imageBlob => {
            // Create an object URL for the image blob
            const imageObjectUrl = URL.createObjectURL(imageBlob);

            // Optionally, set the image src to the object URL
            const imgElement = document.createElement("img");
            imgElement.src = imageObjectUrl;

            // Append the image to the DOM (you can append it anywhere)
            targetElement.appendChild(imgElement);
        })
        .catch(error => {
            console.error("Error fetching the image:", error);
        });
}

export { fetchImage };
