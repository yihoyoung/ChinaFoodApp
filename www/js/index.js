/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var location_url ='';
var ref;
function onDeviceReady() {

    // var str_url = 'http://175.119.224.213:9000/';
    var str_url = 'https://cfomarket.store/';
    // ref = cordova.InAppBrowser.open(str_url, "_blank", "location=no,hardwareback=yes,zoom=yes,clearcache=no,fullscreen=no,toolbar=no,hidden=no");
    ref = cordova.InAppBrowser.open(str_url, "_blank", "location=no,hardwareback=yes,zoom=yes,clearcache=no,fullscreen=no,toolbar=no,hidden=no");

    ref.addEventListener("exit", function() {

        console.log("exit="+location_url);

        if(navigator.app) {
            navigator.app.exitApp();
        }
        else if(navigator.device) {
            navigator.device.exitApp();
        }
    });

    ref.show();

}
