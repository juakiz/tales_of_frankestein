const Helpers = {
    WIDTH: 1280,
    HEIGHT: 720,
    makeText: function (scene, x, y, text, size = '60px') {
        var config = {
          x: x,
          y: y,
          text,
          style: {
            fontSize: size,
            fontFamily: 'Arial',
            color: '#000000',
            align: 'center',
            shadow: {
              color: '#FFFFFF',
              fill: true,
              offsetX: 2,
              offsetY: 2,
              blur: 8
            }
          }
        };
    
        const textObj = scene.make.text(config);
        textObj.setOrigin(0.5, 0.5);
    
        return textObj;
      }
};

export default Helpers;
