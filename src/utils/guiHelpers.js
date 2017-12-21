export const scrollToPosition = (position) => {
  console.log('position changing...', position);
  this.refs.scrollView.scrollTo({
    x: position.x,
    y: position.y,
    animated: false,
  })
}