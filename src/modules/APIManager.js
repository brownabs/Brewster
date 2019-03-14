import Settings from "./Settings"

export default Object.create(null, {
  get: {
    value: function (id) {
      return fetch(`${Settings.remoteURL}/${this.desiredData}/${id}`)
        .then(r => r.json())
    }
  },

  getAll: {
    value: function () {
      return fetch(`${Settings.remoteURL}/${this.desiredData}`)
        .then(r => r.json())
    }
  },

  getAllBatches: {
      value: function () {
          return fetch (`${Settings.remoteURL}/${this.desiredData}`)
          .then(r => r.json())
      }
  },

  post: {
    value: function (obj) {
      return fetch(`${Settings.remoteURL}/${this.desiredData}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
        .then(r => r.json())
    }
  },

  put: {
    value: function (obj) {
      return fetch(`${Settings.remoteURL}/${this.desiredData}/${obj.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
        .then(r => r.json())
    }
  },

  patch: {
    value: function (obj, id) {
      return fetch(`${Settings.remoteURL}/${this.desiredData}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
        .then(r => r.json())
    }
  },
  deleteAndList: {
    value: function (id) {
      return fetch(`${Settings.remoteURL}/${this.desiredData}/${id}`, {
        method: "DELETE"
      })
        .then(r => r.json())
        .then(() => fetch(`${Settings.remoteURL}/${this.desiredData}`))
        .then(r => r.json())
    }
  },
})