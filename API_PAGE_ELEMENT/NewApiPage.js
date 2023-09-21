
import ApiCallPage from "./API_BASEPAGE";

class ReturnApi {

    getApi () {
        return ApiCallPage.CallTheApi();

    }

    getAuthenticationAndAuthorizationApi(entries) {
        return ApiCallPage.filterByCategory(entries, "Authentication & Authorization");
      }
}

export default new ReturnApi();