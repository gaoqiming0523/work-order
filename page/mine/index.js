$(document).on('click','.create-actions', function () {
    var buttons1 = [
      {
        text: '新消息通知',
        label: true
      },
      {
        text: '无'
      },
      {
        text: '震动'
      },
      {
        text: '语音 + 震动'
      }
    ];
    var buttons2 = [
      {
        text: '取 消'
      }
    ];
    var groups = [buttons1, buttons2];
    $.actions(groups);
});

$(document).on('click','.create-setteings', function () {
    var buttons1 = [
      {
        text: '当前系统版本号',
        label: true
      },
      {
        text: '0.0.1'
      },
      
    ];
    var buttons2 = [
      {
        text: '取 消'
      }
    ];
    var groups = [buttons1, buttons2];
    $.actions(groups);
});