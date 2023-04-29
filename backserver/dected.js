var usbDetect = require('usb-detection');

//开始监听USB添加/删除/更改事件。这将导致Node.js进程保持打开状态直到您调用usbDetect.stopMonitoring()
usbDetect.startMonitoring();

//  检测添加/插入
usbDetect.on('add', function(device) { console.log('add', device); });

//  检测删除
usbDetect.on('remove', function(device) { console.log('remove', device); });

// 检测添加或删除（更改）
usbDetect.on('change', function(device) { console.log('change', device); });

// 获取系统上USB设备的列表
usbDetect.find(function(err, devices) { console.log('find', devices, err); });

// Promise version of `find`:
usbDetect.find().then(function(devices) { console.log(devices); }).catch(function(err) { console.log(err); })

//停止监听USB添加/删除/更改事件。这也将允许Node.js进程退出。
// usbDetect.stopMonitoring()
