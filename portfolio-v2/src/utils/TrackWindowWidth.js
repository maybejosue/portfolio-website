export const TrackWindowWidth = (widthState) => {
  var newWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  widthState(newWidth);
};
