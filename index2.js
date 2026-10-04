const predictButton = document.getElementById("predictBtn");

predictButton.addEventListener("click", async function() {

    const trainNumber = document.getElementById("train").value;
    const station = document.getElementById("station").value;

    console.log("Sending data to FastAPI...");

    const response = await fetch("https://railway-eta-prediction.onrender.com/predict", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            train_no: trainNumber,
            current_station: station
        })

    });

    const result = await response.json();

    console.log("Response from FastAPI:", result);


    // Display prediction results

    document.getElementById("predictedEta").textContent =
        result.predicted_eta;

    document.getElementById("futureDelay").textContent =
        result.predicted_future_delay;

    document.getElementById("speed").textContent =
        result.current_speed;

    document.getElementById("delay").textContent =
        result.current_delay;

    document.getElementById("distance").textContent =
        result.distance_to_next_station;

    document.getElementById("historicalDelay").textContent =
        result.historical_avg_delay;

    document.getElementById("congestion").textContent =
        result.congestion;

    document.getElementById("weather").textContent =
        result.weather;

});