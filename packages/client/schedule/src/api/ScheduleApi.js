class ScheduleApi {
  #_client;

  constructor({client}) {
    this.#_client = client;
    this.url = '/schedule';
  }

  getAuditoryTypes = (data) => {
    return this.#_client.get(`${this.url}/auditoryTypes`);
  };

}

export default ScheduleApi;