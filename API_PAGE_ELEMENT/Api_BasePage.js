
// This class is for the API call and filter by category

class ApiCallPage {

    CallTheApi() {
        return cy.request("GET", "https://api.publicapis.org/entries");
      }

      filterByCategory(entries, category) {
        return entries.filter((entry) => entry.Category === category);
      }
    
}
export default new ApiCallPage();
