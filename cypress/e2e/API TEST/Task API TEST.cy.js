describe("API Test", () => {
    it("should call the API, find 'Authentication & Authorization' category, and create a monitor in Postman", () => {
      cy.request("https://api.publicapis.org/entries").then((response) => {
        // Check if the request was successful (status code 200)
        expect(response.status).to.eq(200);
  
        // Find all objects with property "Category: Authentication & Authorization"
        const authAndAuthObjects = response.body.entries.filter(
          (entry) => entry.Category === "Authentication & Authorization"
        );
  
        // Perform assertions on the filtered objects
        expect(authAndAuthObjects).to.have.length.greaterThan(0);
      });
    });
  });