export default (context) => {
  // update active page in store
  context.store.dispatch('updateActivePage', context.route.name)
}
