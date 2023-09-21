
class PostmanMonitorPage {

    createMonitor(monitorData) {
        return cy.request({
          method: "GET",
          url: "https://restful-booker.herokuapp.com/booking",
         
          //body: monitorData,
        });
      }
}
export default new PostmanMonitorPage();