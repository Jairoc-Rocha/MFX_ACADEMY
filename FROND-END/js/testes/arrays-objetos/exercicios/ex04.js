let nums1 = [1, 2, 3, 4, 5, 6, 7];
let nums2 = [1, 2, 3, 4];

function numerosElementos(arr) {
  if (arr.length >= 5) {
    console.log(`O array possui muitos elementos`);
  } else {
    console.log("O array possui poucos elementos");
  }
}
numerosElementos(nums1);
numerosElementos(nums2);
