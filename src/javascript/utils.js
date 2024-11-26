const fetchImage = async (endpoint, targetElement, className) => {
    return fetch(endpoint)
        .then(response => {
            // Check if the response is OK (status 200-299)
            if (!response.ok) {
                console.log('error getting imgae')
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Treat the response as a blob for image data
            return response.blob();
        })
        .then(imageBlob => {
            // Create an object URL for the image blob
            const imageObjectUrl = URL.createObjectURL(imageBlob);

            // Set the image src to the object URL
            // Set the class name
            const imgElement = document.createElement("img");
            imgElement.src = imageObjectUrl;
            imgElement.alt = "";
            imgElement.classList.add(className);

            // Append the image to the DOM (you can append it anywhere)
            targetElement.appendChild(imgElement);

        })
        .catch(error => {
            console.error("Error fetching the image:", error);
        })

};

export { fetchImage };
