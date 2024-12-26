document.getElementById("calculateButton").addEventListener("click", function () {
    const expectedRevenue = parseFloat(document.getElementById("expectedRevenue").value);
    const averageTicket = parseFloat(document.getElementById("averageTicket").value);
    const conversionRate = parseFloat(document.getElementById("conversionRate").value);
  
    const resultDiv = document.getElementById("result");
  
    // Clear previous result
    resultDiv.style.display = "none";
    resultDiv.textContent = "";
  
    if (!expectedRevenue || !averageTicket || !conversionRate) {
      resultDiv.textContent = "Please fill in all fields with valid numbers.";
      resultDiv.style.color = "#e74c3c"; // Red color for error
      resultDiv.style.borderColor = "#e74c3c";
      resultDiv.style.backgroundColor = "#f9e9e9";
      resultDiv.style.display = "block";
      return;
    }
  
    const leadsRequired = Math.ceil(expectedRevenue / averageTicket / (conversionRate / 100));
  
    // Show highlighted result
    resultDiv.textContent = 
      `To achieve $${expectedRevenue.toFixed(2)} revenue, you need to get ${leadsRequired} new customers.`;
    resultDiv.style.color = "#2ecc71"; // Green color for success
    resultDiv.style.borderColor = "#2ecc71";
    resultDiv.style.backgroundColor = "#e9f9ef";
    resultDiv.style.display = "block";
  });
  