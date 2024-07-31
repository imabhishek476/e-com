import deleteIcon from '../../assets/cross_1.png'
import * as fabric from "fabric";

export function deleteObject(eventData, transform) {
  let target = transform.target;
  let canvas = target.canvas;
  canvas.remove(target);
  canvas.requestRenderAll();
}
export function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  let img = document.createElement("img");
  img.src = deleteIcon;
  let size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(img, -size / 2, -size / 2, size, size);
  ctx.restore();
}
export function deleteObjectForBack(eventData, transform) {
  let target = transform.target;
  let canvas = target.canvas;
  canvas.remove(target);
  canvas.requestRenderAll();
}
export function renderIconForBack(ctx, left, top, styleOverride, fabricObject) {
  let img = document.createElement("img");
  img.src = deleteIcon;
  let size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(img, -size / 2, -size / 2, size, size);
  ctx.restore();
}





// obj.setControlsVisibility({
//     mt: false,
//     mb: false,
//     ml: false,
//     mr: false,
//     tl: false,
//     bl: false,
//     mtr: false
//     br: false,
//     tr: false
//   });