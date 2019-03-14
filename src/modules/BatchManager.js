import APIManager from "./APIManager"

export default Object.create(APIManager, {
  desiredData: {
    value: "batches?_expand=recipe&_expand=recipe"
  }
})