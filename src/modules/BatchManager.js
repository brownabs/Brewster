import APIManager from "./APIManager"
import Settings from "./Settings"

export default Object.create(APIManager, {
  desiredData: {
    value: "batches?_expand=recipe&_expand=recipe"
  },

  deleteBatch: {
    value: function (id) {
      return fetch(`${Settings.remoteURL}/batches/${id}`, {
        method: "DELETE"
      })
        .then(r => r.json())
        .then(() => fetch(`${Settings.remoteURL}/batches?_expand=recipe&_expand=recipe`))
        .then(r => r.json())
    }
  }
})