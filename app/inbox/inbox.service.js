export default class InboxService {
  constructor($http) {
    this.$http = $http
    this.apiUrl = 'https://gist.githubusercontent.com/jakubsikora/'+
                  '63f64f166a190de17e210ed3f4321320/raw'+
                  '/eeeabcde65ae3f3101112ab0f19ea943557a1b56/';
  }

  getEmails() {
    return this.$http.get(this.apiUrl + 'emails.json');
  }

  getEmail(id) {
    return this.$http.get(this.apiUrl + 'email-' + id + '.json');
  }

}
