(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{3517:function(e,t,r){Promise.resolve().then(r.bind(r,3488))},3488:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r(7437),n=r(2265);function o(){let[e,t]=(0,n.useState)(null),[r,o]=(0,n.useState)(""),[s,i]=(0,n.useState)(!1),[d,l]=(0,n.useState)(""),c=async()=>{if(e&&r){i(!0);try{let t=new Image;t.src=URL.createObjectURL(e),t.onload=()=>{let e=document.createElement("canvas");e.width=t.width,e.height=t.height;let r=e.getContext("2d");if(r){r.drawImage(t,0,0);let a=r.getImageData(0,0,e.width,e.height),n=[];for(let e=0;e<a.height;e++){let t=[];for(let r=0;r<a.width;r++){let n=(e*a.width+r)*4,o=a.data[n],s=a.data[n+1],i=a.data[n+2];t.push(o.toString(16).padStart(2,"0")+s.toString(16).padStart(2,"0")+i.toString(16).padStart(2,"0"))}n.push(t.join(""))}let o=n.join(";");l(o),i(!1),u(o)}}}catch(e){console.error("Error processing image:",e),i(!1)}}},u=async e=>{try{if(!(await fetch("http://192.168.0.197:8080/api/groundTruthPhotos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:0,photoList:e,name:r})})).ok)throw Error("Failed to send data to API");console.log("Data sent to API successfully")}catch(e){console.error("Error sending data to API:",e)}};return(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen bg-background-alt",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Image Upload"}),(0,a.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files[0]&&(t(e.target.files[0]),l(""))},className:"block text-center border-2 border-white border-solid bg-background-alt font-bold rounded-md hover:border-primary focus:border-primary transition duration-[100] ease-in-out mb-4"}),(0,a.jsx)("input",{type:"text",placeholder:"Enter Name",value:r,onChange:e=>{o(e.target.value)},className:"block text-center border-2 border-white border-solid bg-background-alt font-bold rounded-md hover:border-primary focus:border-primary transition duration-[100] ease-in-out mb-4"}),(0,a.jsx)("button",{onClick:c,disabled:!e||!r||s,className:"bg-background-alt\n                    rounded-md\n                    outline-none\n                    shadow-[0_3px_0px_0px_rgba(255,255,255)]\n                    font-extra bold\n                    hover:bg-primary\n                    hover:shadow-[0_2px_0px_0px_rgba(255,255,255)]\n                    hover:translate-y-[2px]\n                    active:shadow-none\n                    active:translate-y-[4px]\n                    transition duration-[100] ease-in-out\n                    text-center\n                    justify-center\n                    p-3\n                    ".concat(s?"bg-gray-400":"bg-primary-dark hover:bg-blue-600"),children:s?"Processing...":"Process Image"}),d&&(0,a.jsxs)("div",{className:"w-full max-w-xs",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-2",children:"Processed Data"}),(0,a.jsx)("textarea",{value:d,rows:10,cols:50,readOnly:!0,className:"w-full p-2 border border-gray-300 bg-background rounded"})]})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=3517)}),_N_E=e.O()}]);