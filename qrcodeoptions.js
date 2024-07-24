var options = {

  text: "د اوبو او انرژۍ وزارت",
  width: 256,
  height: 256,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.Q,

  dotScale: 0.9,

  logo: "./ministry-logo-original-1-transperratt-gray.png", // Background mew logo Image it is temporary of 30 days online
  logoWidth: 80, // fixed logo width. default is `width/3.5`
    logoHeight: 80, // fixed logo height. default is `heigth/3.5`
    logoBackgroundColor: '#fffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
    logoBackgroundTransparent: true, // Whether use transparent image, default is false
    backgroundImage: './ministry-logo-original-1-transperratt-gray.png', // Background Image  mew logo Image it is temporary of 30 days online
  backgroundImageAlpha: 0.5, // Background image transparency, value between 0 and 1. default is 1. 
  autoColor: false, // Automatic color adjustment(for data block)
  autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
  autoColorLight: "rgba(255, 255, 255, .7)", // Automatic color: light CSS color

}

new QRCode(document.getElementById("qrcode"), options);
