const Helpers = {
    WIDTH: 1280,
    HEIGHT: 720,
    makeText: function (scene, x, y, text, size = '60px', fontColor = '#000000') {
      var config = {
        x: x,
        y: y,
        text,
        style: {
          fontSize: size,
          fontFamily: 'credits',
          color: fontColor,
          align: 'center',
          shadow: {
            color: '#404040',
            fill: true,
            offsetX: 5,
            offsetY: 5,
            // blur: 8
          }
        }
      }
      
      const textObj = scene.make.text(config);
      textObj.setOrigin(0.5, 0.5);
      
      return textObj;
    }
};

export default Helpers;
